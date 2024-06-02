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
    private readonly ICategoryRepository _categoryRepo;
    public ProductRepository(ApplicationDBContext context, ICategoryRepository categoryRepo)
    {
        this._context = context;
        _categoryRepo = categoryRepo;
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


    public async Task<Product> UpdateProductAsync(Guid id,ProductRequestDto product)
    {
        var productOp = await GetProductByIdAsync(id);
        productOp.UpdatedOn = DateTime.Now;
        productOp.Price = product.Price;
        productOp.Name = product.Name;
        productOp.Description = product.Description;
        productOp.Img = product.Img;
        productOp.AvgRating = product.AvgRating;
        productOp.SmallestUnit = product.SmallestUnit;
        await _context.SaveChangesAsync();
        return productOp;
    }
    public async Task<Product> CreateProduct(ProductCreateRequestDto productReq)
    {
        IEnumerable<Category> categories = categories = await _context.Categories.Where(c => productReq.Categories.Contains(c.CategoryId)).ToListAsync();


        if(categories.Count() != productReq.Categories.Count())
        {
            throw new Exception($"Categories {string.Join(",", productReq.Categories.Except(categories.Select(c => c.CategoryId)))} not found");
        }
        
        var product = new Product()
        {
            AvgRating = 0,
            CreatedOn = DateTime.Now,
            Description = productReq.Description,
            Img = productReq.Img,
            Name = productReq.Name,
            Price = productReq.Price,
            Categories = categories.ToList(),
            SmallestUnit = productReq.SmallestUnit
        };
        await _context.Products.AddAsync(product);
        await _context.SaveChangesAsync();
        return product;
    }
}