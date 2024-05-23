using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.ProductReviewDtos
{
    public class ProductReviewResponseDto
    {

        public Guid ProdutReviewId { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Description { get; set; } = string.Empty;
        public Boolean IsGoodQuality { get; set; }
        public Boolean IsGoodResponse { get; set; }
        public Boolean IsGoodDelivery { get; set; }

        public int Rating { get; set; }

        public DateTime? CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
    }
}
