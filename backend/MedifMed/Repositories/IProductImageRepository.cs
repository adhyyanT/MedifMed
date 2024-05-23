using MedifMed.Dtos.ProductImageDtos;
using MedifMed.Models;

namespace MedifMed.Repositories
{
    public interface IProductImageRepository
    {
        public Task<List<ProductImage>> GetProductImagesAsync(Guid ProductId);
        public Task<ProductImage> CreateProductImageAsync(ProductImageRequestDto productImage);
        public Task<List<ProductImage>> CreateProductImagesAsync(List<ProductImageRequestDto> productImage);
        public Task<List<ProductImage>> UpdateProductImagesAsync(List<ProductImageRequestDto> productImages, Guid productId);
        public Task<bool> DeleteProductImageAsync(List<ProductImage> productImage);
    }
}
