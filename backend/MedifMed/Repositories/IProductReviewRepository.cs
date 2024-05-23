using MedifMed.Dtos.ProductReviewDtos;
using MedifMed.Models;

namespace MedifMed.Repositories
{
    public interface IProductReviewRepository
    {
        public Task<ProductReview> CreateProductReviewAsync(ProductReviewRequestDto productReview, Guid prductId);
        public Task<List<ProductReview>> GetProductReviewsAsync(Guid productId);
    }
}
