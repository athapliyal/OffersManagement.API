using Offers.API.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Business
{
    public class OffersBulkFileProcessor : IOffersBulkFileProcessor
    {
        public List<Offer> ProcessUploadedFile(string filePath)
        {
            throw new NotImplementedException();
        }

        public void UploadFileToStorage(OffersBulkImport file)
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", file.FileName);

            using (Stream stream = new FileStream(path, FileMode.Create))
                file.OffersBulkImportFile.CopyTo(stream);
        }
    }
}
