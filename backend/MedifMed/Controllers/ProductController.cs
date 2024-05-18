using MedifMed.Mappers;
using MedifMed.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers;

[Route("api/product")]
[ApiController]
public class ProductController(IProductRepository repo) : ControllerBase
{
    private readonly IProductRepository _productRepository = repo;

    [HttpGet]
    public async Task<IActionResult> GetAllProducts()
    {
        var products = await _productRepository.GetAllProducts();
        return Ok(products.Select((product)=>product.ToProductResponse()));
    }       
}