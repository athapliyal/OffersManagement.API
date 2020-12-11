using Offers.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Business
{
    public interface IBulkFileProcessor<T>
    {
        /// <summary>
        ///     Uploads the file to storage
        /// </summary>
        /// <param name="file"></param>
        void UploadFileToStorage(OffersBulkImport file);

        /// <summary>
        ///     Processes the uploaded file and maps it to the model type
        /// </summary>
        /// <returns></returns>
        List<T> ProcessUploadedFile(string filePath);
    }
}
