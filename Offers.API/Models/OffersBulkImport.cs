using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Models
{
    public class OffersBulkImport
    {
        public string FileName { get; set; }
        public IFormFile OffersBulkImportFile { get; set; }
    }
}
