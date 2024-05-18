namespace MedifMed.Dtos.ProductDetailDtos
{
    public class ProductDetailResponseDto
    {
        public Guid ProductDetailId { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
