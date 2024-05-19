using System.ComponentModel.DataAnnotations;

namespace MedifMed.Models
{
    public class Category
    {
        public Guid CategoryId { get; set; }

        [MaxLength(50)]
        public required string Name { get; set; }

        public List<Product>? Products { get; set; }

        public DateTime? CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
    }
}
