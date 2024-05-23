using MedifMed.Dtos.ProductReviewDtos;
using MedifMed.Models;

namespace MedifMed.Mappers
{
    public static class ProductReviewMapper
    {
        public static ProductReviewResponseDto ToProductReviewResponse(this ProductReview productReview)
        {
            return new ProductReviewResponseDto()
            {
                CreatedOn = DateTime.Now,
                Description = productReview.Description,
                IsGoodDelivery = productReview.IsGoodDelivery,
                IsGoodQuality = productReview.IsGoodQuality,
                IsGoodResponse = productReview.IsGoodResponse,
                Rating = productReview.Rating,
                Title = productReview.Title,
                ProdutReviewId = productReview.ProdutReviewId
            };
        }
    }
}
