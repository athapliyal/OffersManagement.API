using Microsoft.AspNetCore.Mvc;
using Offers.API.Dto;
using Offers.API.Models;
using Offers.API.Repository;
using System.Linq;
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

        [HttpPost]
        public async Task<IActionResult> AddOffer([FromBody] OfferDto offer)
        {
            if (!ModelState.IsValid)
            {
                var errors = new
                {
                    message = "The request is invalid.",
                    error = ModelState.Values.SelectMany(e => e.Errors.Select(er => er.ErrorMessage))
                };

                return BadRequest(errors);
            }

            var offerCount = await GetOffersCount();

            var newOffer = new Offer
            {
                Id = offerCount + 1,
                Title = offer.Title,
                Description = offer.Description,
                StartDate = offer.StartDate,
                EndDate = offer.EndDate,
                Category = offer.Category,
                Status = offer.Status
            };

            await _offerRepository.UploadOffer(newOffer);

            return NoContent();
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
            
            var offer = await _offerRepository.GetOffer(id);
            var offerCount = await GetOffersCount();

            var copiedOffer = new Offer
            {
                Id = offerCount + 1,
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

        private async Task<int> GetOffersCount()
        {
            // PLEASE IGNORE THIS QUICK CODE FOR POC
            var offers = await _offerRepository.GetOffers();

            return offers.Count;
        }
    }
}
