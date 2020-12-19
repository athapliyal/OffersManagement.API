using CsvHelper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Offers.API.Business;
using Offers.API.Models;
using System;
using System.Globalization;
using System.IO;
using System.Threading.Tasks;

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
        public async Task<ActionResult> PostBulkOffers([FromForm] OffersBulkImport file)
        {
            try
            {
                // Upload file
                var fileLocation = await _offersBulkFileProcessor.UploadFileToStorage(file);

                // Read and Process file
                if (!string.IsNullOrEmpty(fileLocation))
                    await _offersBulkFileProcessor.ProcessUploadedFile(fileLocation);

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
