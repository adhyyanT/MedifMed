using MedifMed.Dtos.ProductImageDtos;
using MedifMed.Mappers;
using MedifMed.Repositories.impl;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers
{
    [Route("api/productimage")]
    public class ProductImageController : ControllerBase
    {
        private readonly IProductImageRepository _productImageRepo;

        public ProductImageController(IProductImageRepository productImageRepo)
        {
            _productImageRepo = productImageRepo;
        }

        [HttpGet("product/{productId}")]
        public async Task<IActionResult> GetProductImages([FromRoute]Guid productId)
        {
            try
            {
                var images = await _productImageRepo.GetProductImages(productId);
                return Ok(images.Select(i => i.ToProductImageResponseDto()));
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
            
        }
        [HttpPost("productimage")]
        public async Task<IActionResult> CreateProductImage([FromBody] ProductImageRequestDto productImage)
        {
            var image = await _productImageRepo.CreateProductImage(productImage);
            return Ok(image.ToProductImageResponseDto());
        }
        [HttpPost("productimages")]
        public async Task<IActionResult> CreateProductImages([FromBody] List<ProductImageRequestDto> productImages)
        {
            var images = await _productImageRepo.CreateProductImages(productImages);

            return Ok(images.Select(i => i.ToProductImageResponseDto()).ToList());
        }
    }
}
