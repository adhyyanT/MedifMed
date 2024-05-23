using MedifMed.Database;
using MedifMed.Dtos.ProductReviewDtos;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Repositories.impl
{
    public class ProductReviewRepository: IProductReviewRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly IProductRepository _productRepo;

        public ProductReviewRepository(ApplicationDBContext context,IProductRepository productRepo)
        {
            _productRepo = productRepo;
            _context = context;
        }

        public async Task<ProductReview> CreateProductReviewAsync(ProductReviewRequestDto productReview,Guid productId)
        {
            var product = await _productRepo.GetProductByIdAsync(productId);
            var reviewesCount = await _context.ProductReviews.CountAsync(r => r.ProductId == productId);

            product.AvgRating = ((product.AvgRating * reviewesCount) + productReview.Rating) / (reviewesCount + 1);
            product = await _productRepo.UpdateProductAsync(productId,new Dtos.Product.ProductRequestDto()
            {
                AvgRating = product.AvgRating,
                Description = product.Description,
                Img = product.Img,
                Name = product.Name,
                Price = product.Price
            });
            var review = new ProductReview()
            {
                Description = productReview.Description,
                Title = productReview.Title,
                IsGoodDelivery = productReview.IsGoodDelivery,
                IsGoodQuality = productReview.IsGoodQuality,
                IsGoodResponse = productReview.IsGoodResponse,
                Rating = productReview.Rating,
                ProductId = productId,
                CreatedOn = DateTime.Now
            };
            _context.ProductReviews.Add(review);
            await _context.SaveChangesAsync();
            return review;
        }

        public async Task<List<ProductReview>> GetProductReviewsAsync(Guid productId)
        {
            var productReviews = await _context.ProductReviews.Where((r) => r.ProductId == productId).ToListAsync();
            return productReviews;
        }
    }
}
