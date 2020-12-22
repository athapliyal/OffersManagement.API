using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Models
{
    public class OfferSearch
    {
        public List<Offer> Offers { get; set; }
        public int OffersCount { get; set; }
    }
}
