using System.ComponentModel.DataAnnotations;
using MedifMed.Models;

namespace MedifMed.Dtos.Product
{
    public class ProductCreateRequestDto
    {

        
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;
        [MaxLength(500)]
        public string? Description { get; set; }
        
        public decimal Price { get; set; }
        [MaxLength(50)]
        public string SmallestUnit { get; set; } = "Piece";
        public string Img { get; set; } = "";
        public DateTime? CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; } = DateTime.Now;
        public List<Guid> Categories { get; set; } = [];
        
    }
}
