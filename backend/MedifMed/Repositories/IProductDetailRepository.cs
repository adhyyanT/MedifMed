using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Models;

namespace MedifMed.Repositories
{
    public interface IProductDetailRepository
    {
        Task<ProductDetail> GetProductDetailAsync(Guid id);
        Task<List<ProductDetail>> GetProductDetailsByProductIdAsync(Guid productId);
        Task<ProductDetail> AddProductDetailAsync(ProductDetailCreateRequest productDetail,
    Guid productId);
    }
}
