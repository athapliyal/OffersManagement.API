using Offers.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Business
{
    public interface IOffersBulkFileProcessor : IBulkFileProcessor<Offer>
    {
    }
}
