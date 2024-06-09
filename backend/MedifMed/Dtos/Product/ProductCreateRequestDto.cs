using System.ComponentModel.DataAnnotations;
using MedifMed.Models;

namespace MedifMed.Dtos.Product
{
    public class ProductCreateRequestDto
    {

        
        [MaxLength(100)]
        public string Name { get; set; } = string.Empty;
        [MaxLength(2000)]
        public string? Description { get; set; }
        
        public decimal Price { get; set; }
        [MaxLength(50)]
        public string SmallestUnit { get; set; } = "Piece";
        public string Img { get; set; } = "";
        public List<Guid> Categories { get; set; } = [];
        
    }
}
