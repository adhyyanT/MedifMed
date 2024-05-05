namespace MedifMed.Models;

public class ProductDetail
{
    public Guid ProductDetailId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public required Guid ProductId { get; set; }
    public required Product Product { get; set; }
    
    public DateTime? CreatedOn { get; set; }
    public DateTime UpdatedOn { get; set; } = DateTime.Now;
}