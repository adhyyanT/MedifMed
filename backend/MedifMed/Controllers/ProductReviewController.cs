using MedifMed.Dtos.ProductReviewDtos;
using MedifMed.Mappers;
using MedifMed.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers
{
    [Route("api/productreview")]
    [ApiController]
    public class ProductReviewController : ControllerBase
    {
        private readonly IProductReviewRepository _productReviewRepo;

        public ProductReviewController(IProductReviewRepository productReviewRepo)
        {
            _productReviewRepo = productReviewRepo;
        }
        [HttpPost("product/{productId}")]
        public async Task<IActionResult> CreateProductReview([FromRoute] Guid productId, [FromBody] ProductReviewRequestDto review)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var rev = await _productReviewRepo.CreateProductReviewAsync(review, productId);
            return Ok(rev.ToProductReviewResponse());
        }
        [HttpGet("product/{productId}")]
        public async Task<IActionResult> GetProducts([FromRoute] Guid productId)
        {
            var review = await _productReviewRepo.GetProductReviewsAsync(productId);
            return Ok(review.Select(r => r.ToProductReviewResponse()));
        }

    }
}
