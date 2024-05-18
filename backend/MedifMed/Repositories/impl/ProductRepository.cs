using MedifMed.Database;
using MedifMed.Dtos.Product;
using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Mappers;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Repositories.impl;

public class ProductRepository: IProductRepository
{
    private readonly ApplicationDBContext _context;
    public ProductRepository(ApplicationDBContext context)
    {
        this._context = context;
    }

    public Task<List<ProductResponseDto>> GetAllProducts()
    {
        var query = _context.Products.Include(p => p.ProductDetails);
        //foreach (var t in query)
        //{
        //    Console.WriteLine(t.Name + " "+ t.ProductDetails[0].Title);
        //}
        return  query.Select(p => p.ToProductResponse()).ToListAsync();

        //var products = query
        //.Select(p => new ProductResponseDto()
        //{
        //    ProductId = p.ProductId,
        //    Name = p.Name,
        //    Description = p.Description,
        //    ProductDetails = p.ProductDetails.Select(pd => new ProductDetailResponseDto()
        //    {
        //        ProductDetailId = pd.ProductDetailId,
        //        Description = pd.Description,
        //        Title = pd.Title
        //        // Map other properties as needed
        //    }).ToList()
        //}).ToListAsync();
        //return products;
        
    }
}