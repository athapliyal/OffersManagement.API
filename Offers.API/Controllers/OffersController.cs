using Microsoft.AspNetCore.Mvc;
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
            var offer = await _offerRepository.GetOffer(id);

            if (!_offerRepository.OfferExists(id))
                return NotFound();

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
    }
}
