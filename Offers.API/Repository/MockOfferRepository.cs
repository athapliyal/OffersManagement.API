using Offers.API.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Repository
{
    public class MockOfferRepository : IOfferRepository
    {        
        public async Task<Offer> GetOffer(int id)
        {
            // Mock a 1 second delay to show asynchronous behavior
            await Task.Delay(1000);

            return MockOffers.RetrieveMockedOffer(id);
        }

        public async Task<IList<Offer>> GetOffers()
        {
            // Mock a 2 second delay to show asynchronous behavior
            await Task.Delay(2000);

            return MockOffers.RetrieveMockedOffers();
        }

        public async Task DeleteOffer(int offerId)
        {
            // Mock a 1 second delay to show asynchronous behavior
            await Task.Delay(1000);

            MockOffers.DeleteMockedOffer(offerId);
        }

        public bool OfferExists(int offerId)
        {
            var offer = MockOffers.RetrieveMockedOffer(offerId);

            return offer == null ? false : true;
        }
    }
}
