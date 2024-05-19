using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.ProductDetailDtos
{
    public class ProductDetailCreateRequest
    {
        [Required]
        [MaxLength(50)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(500)]
        public string Description { get; set; } = string.Empty;
    }
}
