using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Offers.API.Business;
using Offers.API.Models;
using System;

namespace Offers.API.Controllers
{
    [Route("api/bulkimport")]
    [ApiController]
    public class BulkImportController : ControllerBase
    {
        private readonly IOffersBulkFileProcessor _offersBulkFileProcessor;
        private readonly ILogger<BulkImportController> _logger;        

        public BulkImportController(IOffersBulkFileProcessor offersBulkFileProcessor, ILogger<BulkImportController> logger)
        {            
            _offersBulkFileProcessor = offersBulkFileProcessor;
            _logger = logger;
        }

        [Route("offers")]
        [HttpPost]
        public ActionResult PostBulkOffers([FromForm] OffersBulkImport file)
        {
            try
            {
                _offersBulkFileProcessor.UploadFileToStorage(file);                

                return NoContent();

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest();
            }
        }
    }
}
