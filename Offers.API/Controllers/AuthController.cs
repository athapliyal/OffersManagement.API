using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Offers.API.Dto;
using System;
using System.Threading.Tasks;

namespace Offers.API.Controllers
{
    [Route("api/authorize")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private const string USERNAME = "plexure";
        private const string PASSWORD = "plexure";

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDto login)
        {
            if (ModelState.IsValid)
            {
                // pretend this calls a login service which validates the username and password
                var loginSuccess = CheckIfUserIsAuthorised(login.Username, login.Password);

                if (loginSuccess)
                {
                    var token = Guid.NewGuid().ToString();
                    var refreshToken = Guid.NewGuid().ToString();

                    Response.Cookies.Append("X-Access-Token", token, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict });
                    Response.Cookies.Append("X-Username", USERNAME, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict });
                    Response.Cookies.Append("X-Refresh-Token", refreshToken, new CookieOptions() { HttpOnly = true, SameSite = SameSiteMode.Strict });

                    return Ok();
                }
                else
                {
                    return Unauthorized();
                }
            }

            return Unauthorized();
        }

        private bool CheckIfUserIsAuthorised(string username, string password)
        {
            return username.Equals(USERNAME) && password.Equals(password) ? true : false;
        }
    }
}
