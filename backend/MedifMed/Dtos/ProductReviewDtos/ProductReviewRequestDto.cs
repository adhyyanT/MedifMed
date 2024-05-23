using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.ProductReviewDtos
{
    public class ProductReviewRequestDto
    {

        [MaxLength(20)]
        public string Title { get; set; } = string.Empty;
        [MaxLength(500)]
        public string Description { get; set; } = string.Empty;
        public Boolean IsGoodQuality { get; set; }
        public Boolean IsGoodResponse { get; set; }
        public Boolean IsGoodDelivery { get; set; }
        [Required]
        public int Rating { get; set; }
    }
}
