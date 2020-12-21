using Microsoft.AspNetCore.Mvc;
using Offers.API.Models;
using Offers.API.Repository;
using System.Threading.Tasks;

namespace Offers.API.Controllers
{
    [Route("api/offers")]
    [ApiController]
    public class OffersController : ControllerBase
    {
        private readonly IOfferRepository _offerRepository;

        public OffersController(IOfferRepository offerRepository)
        {
            _offerRepository = offerRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllOffers()
        {
            var offers = await _offerRepository.GetOffers();

            return Ok(offers);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOffer(int id)
        {
            if (!_offerRepository.OfferExists(id))
                return NotFound();

            var offer = await _offerRepository.GetOffer(id);
            return Ok(offer);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteOffer(int id)
        {
            if (_offerRepository.OfferExists(id))
            {
                await _offerRepository.DeleteOffer(id);

                return NoContent();
            }

            return NotFound();
        }

        [HttpGet]
        [Route("copyOffer")]
        public async Task<IActionResult> CopyOffer(int id)
        {
            if (!_offerRepository.OfferExists(id))
                return NotFound();

            // PLEASE IGNORE THIS QUICK CODE, NOT THE MOST OPTIMISED IMPLEMENTATION BUT HEY, CUT ME SOME SLACK! :D
            var offers = await _offerRepository.GetOffers();
            var offer = await _offerRepository.GetOffer(id);

            var copiedOffer = new Offer
            {
                Id = offers.Count + 1,
                Title = $"Copy of {offer.Title}",
                Description = $"Copy of {offer.Description}",
                StartDate = offer.StartDate,
                EndDate = offer.EndDate,
                Category = offer.Category,
                Status = offer.Status
            };

            await _offerRepository.UploadOffer(copiedOffer);

            return Ok();
        }
    }
}
