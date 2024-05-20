using MedifMed.Dtos.ProductImageDtos;
using MedifMed.Models;

namespace MedifMed.Repositories.impl
{
    public interface IProductImageRepository
    {
        public Task<List<ProductImage>> GetProductImages(Guid ProductId);
        public Task<ProductImage> CreateProductImage(ProductImageRequestDto productImage);
        public Task<List<ProductImage>> CreateProductImages(List<ProductImageRequestDto> productImage);
    }
}
