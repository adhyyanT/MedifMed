using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedifMed.Models;

public class Product
{
    public Guid ProductId { get; set; }
    [MaxLength(100)]
    public string Name { get; set; } = string.Empty;
    [MaxLength(500)]
    public string? Description { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal AvgRating { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    [MaxLength(50)]
    public string SmallestUnit { get; set; } = "Piece";
    public string Img { get; set; } = "";
    public DateTime? CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; } = DateTime.Now;
    public List<ProductDetail> ProductDetails { get; set; }
    public List<Category> Categories { get; set; } = [];
    public List<ProductImage> ProductImages { get; set; } = [];
    public List<ProductReview> ProductReviews { get; set; } = [];

    public override string ToString()
    {
        return $"{Name} {Description} {AvgRating} {Price} {Img}";
    }
}