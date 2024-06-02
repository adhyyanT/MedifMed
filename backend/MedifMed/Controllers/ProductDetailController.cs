using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Mappers;
using MedifMed.Repositories;
using MedifMed.Repositories.impl;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers
{
    [Route("api/productdetail")]
    public class ProductDetailController: ControllerBase
    {
        private readonly IProductDetailRepository _detailRepo;

        public ProductDetailController(IProductDetailRepository detailRepo)
        {
            _detailRepo = detailRepo;
        }

        

        [HttpGet("detail/{productDetailId}")]
        [ActionName(nameof(GetProductDetail))]
        public async Task<IActionResult> GetProductDetail([FromRoute] Guid productDetailId)
        {
            try
            {
                var productDetail = await _detailRepo.GetProductDetailAsync(productDetailId);
                return Ok(productDetail.ToProductDetailResponse());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("product/{productId}")]
        public async Task<IActionResult> GetProductDetailsByProductId([FromRoute] Guid productId)
        {
            try
            {
                var productDetails = await _detailRepo.GetProductDetailsByProductIdAsync(productId);
                return Ok(productDetails.Select(d => d.ToProductDetailResponse()).ToList());
    }   
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpPost("{productId}/details")]
        public async Task<IActionResult> AddProductDetail([FromBody] ProductDetailCreateRequest productDetail, [FromRoute] Guid productId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var detail = await _detailRepo.AddProductDetailAsync(productDetail, productId);
                return CreatedAtAction(nameof(GetProductDetail), new { productDetailId = detail.ProductDetailId }, detail.ToProductDetailResponse());

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return BadRequest(e.Message);
            }
        }
    }
}
