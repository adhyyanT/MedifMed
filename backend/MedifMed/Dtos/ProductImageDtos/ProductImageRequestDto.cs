using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.ProductImageDtos
{
    public class ProductImageRequestDto
    {
        [Required]
        public string Url { get; set; } = string.Empty;
        public Guid ProductId { get; set; }
    }
}
