using Offers.API.Enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace Offers.API.Dto
{
    public class OfferDto
    {
        [Required]
        [MaxLength(200)]
        public string Title { get; set; }

        [Required]
        [MaxLength(300)]
        public string Description { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }
        public OfferCategory Category { get; set; }
        public OfferStatus Status { get; set; }
    }
}
