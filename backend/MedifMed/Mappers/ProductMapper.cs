using MedifMed.Dtos.Product;
using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Models;

namespace MedifMed.Mappers
{
    public static class ProductMapper
    {
        public static ProductResponseDto ToProductResponse(this Product product)
        {
            return new ProductResponseDto()
            {
                AvgRating = product.AvgRating,
                Description = product.Description,
                Name = product.Name,
                Price = product.Price,
                ProductId = product.ProductId,
                Img = product.Img,
                SmallestUnit = product.SmallestUnit
            };
        }
        public static ProductDetailResponseDto ToProductDetailResponse(this ProductDetail detail)
        {
            return new ProductDetailResponseDto()
            {
                Description = detail.Description,
                Title = detail.Title,
                ProductDetailId = detail.ProductDetailId
            };
        }
    }
}
