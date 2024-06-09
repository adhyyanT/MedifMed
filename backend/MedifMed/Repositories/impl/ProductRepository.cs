using MedifMed.Database;
using MedifMed.Dtos.Product;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;
using MedifMed.Types;
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


    public async Task<List<Product>> GetAllProductsAsync(int page, int sort)
    {
        int pageSize = Constant.PRODUCT_PAGE_SIZE;
        SortBy sortColumn = (SortBy)sort;
        IQueryable<Product> query;

        switch (sortColumn)
        {
            case SortBy.rating:
                //query = _context.Products
                //    .Where(p => p.Categories.Any(c => c.CategoryId == new Guid())).
                //OrderBy(p => p.AvgRating)
                //    .Skip((page - 1) * pageSize)
                //    .Take(pageSize);
                query = _context.Products
                .OrderBy(p => p.AvgRating)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
                    
                break;
            case SortBy.name:
                query = _context.Products.
                    OrderBy(p => p.Name)
                    .Skip((page - 1) * pageSize)
                    .Take(pageSize);
                break;

            case SortBy.price:
                query = _context.Products.
                   OrderBy(p => p.Price)
                   .Skip((page - 1) * pageSize)
                   .Take(pageSize);
                break;
            case SortBy.rating_desc:
                query = _context.Products.
                   OrderByDescending(p => p.AvgRating)
                   .Skip((page - 1) * pageSize)
                   .Take(pageSize);
                break;
            case SortBy.name_desc:
                query = _context.Products.
                   OrderByDescending(p => p.Name)
                   .Skip((page - 1) * pageSize)
                   .Take(pageSize);
                break;
            case SortBy.price_desc:
                query = _context.Products.
                   OrderByDescending(p => p.Price)
                   .Skip((page - 1) * pageSize)
                   .Take(pageSize);
                break;
            default:
                query = _context.Products.
                   OrderBy(p => p.Name)
                   .Skip((page - 1) * pageSize)
                   .Take(pageSize);
                break;
        }
        
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
        IEnumerable<Category> categories = await _context.Categories.Where(c => productReq.Categories.Contains(c.CategoryId)).ToListAsync();


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