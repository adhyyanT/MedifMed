using MedifMed.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Dtos.Category;

namespace MedifMed.Dtos.Product
{
    public class ProductResponseDto
    {
        public Guid ProductId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Description { get; set; }
        public int AvgRating { get; set; } = 0;
        public decimal Price { get; set; }
        public string Img { get; set; } = "";
        public List<ProductDetailResponseDto> ProductDetails { get; set; } = []; 
        public List<CategoryResponseDto> Categories { get; set; } = [];
    }
}
