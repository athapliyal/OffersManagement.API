using Microsoft.AspNetCore.Mvc;
using Offers.API.Data;
using Offers.API.Models;
using System;
using System.Collections.Generic;
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
        public async Task<ActionResult<IList<Offer>>> GetAllOffers()
        {
            var offers = await _offerRepository.GetOffers();

            return Ok(offers);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Offer>> GetOffer(int id)
        {
            var offer = await _offerRepository.GetOffer(id);

            return Ok(offer);
        }
    }
}
