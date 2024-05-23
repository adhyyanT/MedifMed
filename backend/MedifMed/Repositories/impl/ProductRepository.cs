using MedifMed.Database;
using MedifMed.Dtos.Product;
using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Dtos.ProductImageDtos;
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

    public async Task<List<Product>> GetAllProductsAsync()
    {
        var query = _context.Products;
        return await query.ToListAsync();

    }
    public async Task<Product> GetProductByIdAsync(Guid id)
    {
        var product = await _context.Products
            .FirstOrDefaultAsync((p) => p.ProductId == id) ?? throw new Exception("Product not found.");
        return product;
    }
    public async Task<ProductDetail> AddProductDetailAsync(ProductDetailCreateRequest productDetail,
        Guid productId)
    {
        var product = await GetProductByIdAsync(productId);
        ProductDetail details = new ProductDetail
        {
            Description = productDetail.Description,
            CreatedOn = DateTime.Now,
            Title = productDetail.Title,
            ProductId = productId,

        };
        product.ProductDetails.Add(details);
        await _context.SaveChangesAsync();
        return details;
    }

    public async Task<Product> UpdateProductAsync(Guid id,ProductRequestDto product)
    {
        var productOp = await GetProductByIdAsync(id);
        productOp.UpdatedOn = DateTime.Now;
        productOp.Price = product.Price;
        productOp.Name = product.Name;
        productOp.Description = product.Description;
        productOp.Img = product.Img;
        productOp.AvgRating = product.AvgRating;
        Console.WriteLine(productOp.ToString());
        await _context.SaveChangesAsync();
        return productOp;
    }
}