using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Mappers;
using MedifMed.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers;

[Route("api/products")]
[ApiController]
public class ProductController(IProductRepository repo) : ControllerBase
{
    private readonly IProductRepository _productRepository = repo;



    // Get all products with pagination
    [HttpGet]
    public async Task<IActionResult> GetAllProducts()
    {
        var products = await _productRepository.GetAllProductsAsync();
        return Ok(products.Select(p => p.ToProductResponse()).ToList());
    }

    // Get single product
    [HttpGet("{productId}")]
    public async Task<IActionResult> GetProduct([FromRoute] Guid productId)
    {
        try
        {
            var product = await _productRepository.GetProductByIdAsync(productId);
            return Ok(product.ToProductResponse());
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // post product

    // put product

    // delete product

    // get details for productID

    // post details for productId
    [HttpPost("{productId}/details")]
    public async Task<IActionResult> AddProductDetail([FromBody] ProductDetailCreateRequest productDetail,[FromRoute] Guid productId)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        try
        {
            var detail = await _productRepository.AddProductDetailAsync(productDetail, productId);
            
            return Created($"{Request.Scheme}://{Request.Host}/api/productdetail/{detail.ProductDetailId}", detail.ToProductDetailResponse());
            
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }
    }
}