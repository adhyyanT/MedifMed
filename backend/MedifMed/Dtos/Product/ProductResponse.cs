using MedifMed.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.Product
{
    public class ProductResponse
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int AvgRating { get; set; } = 0;
        public decimal Price { get; set; }
    }
}
