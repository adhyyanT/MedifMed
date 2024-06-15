using MedifMed.Dtos.Product;
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
    public async Task<IActionResult> GetAllProducts([FromQuery]int page = 1, [FromQuery]int sort = 6, [FromQuery]Guid? categoryId = null)
    {
        Console.WriteLine(categoryId);
        var pagedResponse = await _productRepository.GetAllProductsAsync(page,sort,categoryId);
        return Ok(new {
            products = pagedResponse.products.Select(p => p.ToProductResponse()),
            totalPages = pagedResponse.count
        });
    }

    // Get single product
    [HttpGet("product/{productId}")]
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
    [HttpPost("product")]
    public async Task<IActionResult> CreateProduct([FromBody] ProductCreateRequestDto productReq)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        try
        {
            var product = await _productRepository.CreateProduct(productReq);
            return Ok(product.ToProductResponse());
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }
    }


    // put product
    [HttpPut("product/{productId}")]
    public async Task<IActionResult> UpdateProduct([FromRoute] Guid productId, [FromBody] ProductRequestDto product)
    {
        if (!ModelState.IsValid) return BadRequest(ModelState);
        try
        {
            var newProduct = await _productRepository.UpdateProductAsync(productId, product);
            return Ok(newProduct.ToProductResponse());
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }
    }

    // delete product
    
}