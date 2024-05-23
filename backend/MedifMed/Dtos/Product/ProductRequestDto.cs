using MedifMed.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.Product
{
    public class ProductRequestDto
    {
        [Required]
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;
        [Required]
        [MaxLength(500)]
        public string? Description { get; set; }

        [Required]
        public decimal AvgRating { get; set; } = 0;
        [Required]
        public decimal Price { get; set; }
        [Required]
        public string Img { get; set; } = "";

    }
}
