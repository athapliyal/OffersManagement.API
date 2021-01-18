using Microsoft.AspNetCore.Mvc;
using Offers.API.Dto;
using Offers.API.Models;
using Offers.API.Repository;
using System;
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
        public async Task<IActionResult> GetAllOffers([FromQuery] OffersResourceParameters offersResourceParameters)
        {
            var offersSearchResult = await _offerRepository.GetOffers(offersResourceParameters);

            return Ok(offersSearchResult);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOffer(int id)
        {
            if (!_offerRepository.OfferExists(id))
                return NotFound();

            var offer = await _offerRepository.GetOffer(id);
            return Ok(offer);
        }

        [HttpGet]
        [Route("addmultipleoffers")]
        public async Task<IActionResult> AddMultipleOffers()
        {      
            if (MockOffers.LoadMoreOffersForInfiniteScroll)
            {
                for (int i = 100; i < 20_000; i++)
                {
                    var newOffer = new Offer
                    {
                        Id = GenerateRandomId(),
                        Title = $"Offer with title {i}",
                        Description = $"Offer with description {i}",
                        StartDate = new DateTime(),
                        EndDate = new DateTime(),
                        Category = i < 5000 ? Enums.OfferCategory.Clothing : Enums.OfferCategory.Food,
                        Status = i < 5000 ? Enums.OfferStatus.Pending : Enums.OfferStatus.Published
                    };

                    await _offerRepository.UploadOfferWithNoDelay(newOffer);
                }
            }

            return Ok();
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

            var newOffer = new Offer
            {
                Id = GenerateRandomId(),
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

            var copiedOffer = new Offer
            {
                Id = GenerateRandomId(),
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

        private int GenerateRandomId()
        {
            var random = new Random();
            return random.Next(10, int.MaxValue);  
        }
    }
}
