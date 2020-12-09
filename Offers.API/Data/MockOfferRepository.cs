using Offers.API.Enums;
using Offers.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Data
{
    public class MockOfferRepository : IOfferRepository
    {
        public async Task<Offer> GetOffer(int id)
        {
            // Mock a 2 second delay to show asynchronous behavior
            await Task.Delay(1000);

            return new Offer
            {
                Id = 1,
                Title = "Offer number 1",
                Description = "This offer is for a restaurant",
                Category = OfferCategory.Food,
                StartDate = new DateTime(2020, 12, 25, 10, 30, 50),
                EndDate = new DateTime(2021, 01, 25, 12, 00, 00),
                Status = OfferStatus.Published
            };
        }

        public async Task<IList<Offer>> GetOffers()
        {
            // Mock a 2 second delay to show asynchronous behavior
            await Task.Delay(2000);

            var offers = new List<Offer>();

            offers.Add(new Offer
            {
                Id = 1,
                Title = "Offer number 1",
                Description = "This offer is for a restaurant",
                Category = OfferCategory.Food,
                StartDate = new DateTime(2020, 12, 25, 10, 30, 50),
                EndDate = new DateTime(2021, 01, 25, 12, 00, 00),
                Status = OfferStatus.Published
            });

            offers.Add(new Offer
            {
                Id = 2,
                Title = "Offer number 2",
                Description = "This offer is for a restaurant",
                Category = OfferCategory.Food,
                StartDate = new DateTime(2020, 12, 25, 10, 30, 50),
                EndDate = new DateTime(2021, 01, 25, 12, 00, 00),
                Status = OfferStatus.Draft
            });

            offers.Add(new Offer
            {
                Id = 3,
                Title = "Offer number 3",
                Description = "This offer is for a restaurant",
                Category = OfferCategory.Food,
                StartDate = new DateTime(2020, 12, 25, 10, 30, 50),
                EndDate = new DateTime(2021, 01, 25, 12, 00, 00),
                Status = OfferStatus.Pending
            });

            offers.Add(new Offer
            {
                Id = 4,
                Title = "Offer number 4",
                Description = "This offer is for clothing",
                Category = OfferCategory.Clothing,
                StartDate = new DateTime(2020, 12, 25, 10, 30, 50),
                EndDate = new DateTime(2021, 01, 25, 12, 00, 00),
                Status = OfferStatus.Pending
            });

            offers.Add(new Offer
            {
                Id = 5,
                Title = "Offer number 5",
                Description = "This offer is for sports",
                Category = OfferCategory.Sports,
                StartDate = new DateTime(2020, 12, 25, 10, 30, 50),
                EndDate = new DateTime(2021, 01, 25, 12, 00, 00),
                Status = OfferStatus.Published
            });            

            return offers;
        }
    }
}
