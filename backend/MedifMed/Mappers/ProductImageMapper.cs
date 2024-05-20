using MedifMed.Dtos.ProductImageDtos;
using MedifMed.Models;

namespace MedifMed.Mappers
{
    public static class ProductImageMapper
    {
        public static ProductImageResponseDto ToProductImageResponseDto(this ProductImage productImage)
        {
            return new ProductImageResponseDto()
            {
                ProductImageId = productImage.ProductImageId,
                Url = productImage.Url
            };
        }
    }
}
