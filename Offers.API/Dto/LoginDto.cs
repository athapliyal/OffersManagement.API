using Offers.API.Enums;
using System;
using System.ComponentModel.DataAnnotations;

namespace Offers.API.Dto
{
    public class LoginDto
    {
        [Required]
        [MaxLength(20)]
        public string Username { get; set; }

        [Required]
        [MaxLength(20)]
        public string Password { get; set; }
    }
}
