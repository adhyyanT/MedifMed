using System.Text.Json.Serialization;

namespace MedifMed.Models
{
    public class ProductImage
    {
        public Guid ProductImageId { get; set; }
        public string Url { get; set; } = string.Empty;

        public Guid ProductId { get; set; }
        [JsonIgnore]
        public Product Product { get; set; }
        public DateTime? CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
    }
}
