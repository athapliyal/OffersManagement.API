using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Offers.API.Models
{
    public class OffersResourceParameters
    {
        const int MAX_PAGE_SIZE = 100;

        public int PageNumber { get; set; } = 1;

        private int _pageSize = 10;

        public int PageSize {
            get => _pageSize;
            set => _pageSize = (value > MAX_PAGE_SIZE) ? MAX_PAGE_SIZE : value;
        }
    }
}
