using MedifMed.Dtos.Product;
using MedifMed.Models;

namespace MedifMed.Mappers
{
    public static class ProductMapper
    {
        public static ProductResponse ToProductResponse(this Product product)
        {
            return new ProductResponse()
            {
                AvgRating = product.AvgRating,
                Description = product.Description,
                Name = product.Name,
                Price = product.Price,
                ProductId = product.ProductId,
            };
        }
    }
}
