using Offers.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Repository
{
    public interface IOfferRepository
    {
        /// <summary>
        ///     Retrieve all offers
        /// </summary>
        /// <returns></returns>
        Task<IList<Offer>> GetOffers();

        /// <summary>
        ///     Retrieve a specific offer
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Task<Offer> GetOffer(int id);

        /// <summary>
        ///     Upload an offer
        /// </summary>
        /// <param name="offer"></param>
        /// <returns></returns>
        Task BulkUploadOffers(List<Offer> offer);

        /// <summary>
        ///     Delete an offer
        /// </summary>
        /// <param name="id"></param>
        Task DeleteOffer(int offerId);

        /// <summary>
        ///     Checks if an offer exists or not
        /// </summary>
        /// <param name="offerId"></param>
        /// <returns></returns>
        bool OfferExists(int offerId);
    }
}
