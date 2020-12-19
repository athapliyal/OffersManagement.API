using CsvHelper;
using Offers.API.Models;
using Offers.API.Repository;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Business
{
    public class OffersBulkFileProcessor : IOffersBulkFileProcessor
    {
        private readonly IOfferRepository _offerRepository;

        public OffersBulkFileProcessor(IOfferRepository offerRepository)
        {
            _offerRepository = offerRepository;
        }

        public async Task ProcessUploadedFile(string filePath)
        {
            using (var reader = new StreamReader(filePath))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                csv.Configuration.CultureInfo = CultureInfo.GetCultureInfo("en-AU");
                var offers = csv.GetRecords<Offer>();

                await _offerRepository.BulkUploadOffers(offers.ToList());
            }
        }

        public async Task<string> UploadFileToStorage(OffersBulkImport file)
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.OffersBulkImportFile.FileName);

            try
            {
                using (Stream stream = new FileStream(path, FileMode.Create))
                    await file.OffersBulkImportFile.CopyToAsync(stream);

                return Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.OffersBulkImportFile.FileName);
            }
            catch (FileLoadException ex)
            {
                Console.WriteLine(ex);
            }

            return null;
        }
    }
}
