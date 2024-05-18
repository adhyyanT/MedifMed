using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace MedifMed.Models;

public class ProductDetail
{
    public Guid ProductDetailId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;

    [ForeignKey(nameof(Product))]
    public  Guid ProductId { get; set; }
    [JsonIgnore]
    public Product Product { get; set; }
    
    public DateTime? CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; } = DateTime.Now;
}