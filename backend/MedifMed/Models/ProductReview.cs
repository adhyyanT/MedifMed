using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MedifMed.Models
{
    public class ProductReview
    {
        [Key]
        public Guid ProdutReviewId { get; set; }
        [MaxLength(20)]
        public string Title { get; set; } = string.Empty;
        [MaxLength(500)]
        public string Description { get; set; } = string.Empty;
        public Boolean IsGoodQuality { get; set; }
        public Boolean IsGoodResponse { get; set; }
        public Boolean IsGoodDelivery{ get; set; }
        [Required]
        public int Rating { get; set; }
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public DateTime? CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;

    }
}
