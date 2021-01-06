using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Offers.API.Business;
using Offers.API.Repository;
using System.Threading.Tasks;

namespace Offers.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Offers.API", Version = "v1" });
            });

            services.AddAuthentication(i =>
            {
                i.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                i.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                i.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                i.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
            })
               .AddJwtBearer(options =>
               {                   
                   options.SaveToken = true;
                   options.Events = new JwtBearerEvents();
                   options.Events.OnMessageReceived = context => {

                       if (context.Request.Cookies.ContainsKey("X-Access-Token"))
                       {
                           context.Token = context.Request.Cookies["X-Access-Token"];
                       }

                       return Task.CompletedTask;
                   };
               })
               .AddCookie(options =>
               {
                   options.Cookie.SameSite = SameSiteMode.Strict;
                   options.Cookie.SecurePolicy = CookieSecurePolicy.Always;
                   options.Cookie.IsEssential = true;
               });

            services.AddTransient<IOfferRepository, MockOfferRepository>();
            services.AddTransient<IOffersBulkFileProcessor, OffersBulkFileProcessor>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Offers.API v1"));
            }

            app.UseRouting();

            // global cors policy
            app.UseCors(x => x
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true) // allow any origin
                .AllowCredentials()); // allow credentials

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });    
        }
    }
}
