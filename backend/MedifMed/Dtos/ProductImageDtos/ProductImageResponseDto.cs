using System.Text.Json.Serialization;

namespace MedifMed.Dtos.ProductImageDtos
{
    public class ProductImageResponseDto
    {
        public Guid ProductImageId { get; set; }
        public string Url { get; set; } = string.Empty;
    }
}
