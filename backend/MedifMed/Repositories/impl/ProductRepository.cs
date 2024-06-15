using MedifMed.Database;
using MedifMed.Dtos.Product;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;
using MedifMed.Types;
using System.Linq.Expressions;
namespace MedifMed.Repositories.impl;

public class ProductRepository : IProductRepository
{
    private readonly ApplicationDBContext _context;
    private readonly ICategoryRepository _categoryRepo;
    public ProductRepository(ApplicationDBContext context, ICategoryRepository categoryRepo)
    {
        this._context = context;
        _categoryRepo = categoryRepo;
    }

    private void _pagedProducts<T>(int pageSize, int page, Guid? categoryId,Expression<Func<Product,T>> orderBy,bool asc, out int totalPages,out IQueryable<Product> pagedItemsQuery)
    {
        var query = categoryId == null ? _context.Products : (_context.Products
                    .Include(p => p.Categories)
                    .Where(p => p.Categories.Any(c => c.CategoryId == categoryId)));

        var orderedQuery = asc ? query.OrderBy(orderBy) : query.OrderByDescending(orderBy);

        var totalItems = orderedQuery.Count();
        totalPages = (int)Math.Ceiling((double)totalItems / pageSize); ;
        pagedItemsQuery = orderedQuery.Skip((page - 1) * pageSize).Take(pageSize);

    }
    public async Task<ProductPagedReponseDto> GetAllProductsAsync(int page, int sort, Guid? categoryId)
    {
        int pageSize = Constant.PRODUCT_PAGE_SIZE;
        var totalPages = 0;
        SortBy sortColumn = (SortBy)sort;
        IQueryable<Product> query;
        switch (sortColumn)
        {
            case SortBy.rating:
                _pagedProducts<decimal>(pageSize, page, categoryId, (p) => p.AvgRating, true, out totalPages, out query);
                break;
            case SortBy.name:
                _pagedProducts<string>(pageSize, page, categoryId, (p) => p.Name, true, out totalPages, out query);
                break;
            case SortBy.price:
                _pagedProducts<decimal>(pageSize, page, categoryId, (p) => p.Price, true, out totalPages, out query);
                break;
            case SortBy.rating_desc:
                _pagedProducts<decimal>(pageSize, page, categoryId, (p) => p.AvgRating,false,out totalPages,out query);
                break;
            case SortBy.name_desc:
                _pagedProducts<string>(pageSize, page, categoryId, (p) => p.Name, false, out totalPages, out query);
                break;
            case SortBy.price_desc:
                _pagedProducts<decimal>(pageSize, page, categoryId, (p) => p.Price, false, out totalPages, out query);
                break;
            default:
                _pagedProducts<decimal>(pageSize, page, categoryId, (p) => p.AvgRating, false, out totalPages, out query);
                break;
        }
        var pagedProducts = await query.ToListAsync();
        return new ProductPagedReponseDto()
        {
            products = pagedProducts,
            count = totalPages
        };

    }
    public async Task<Product> GetProductByIdAsync(Guid id)
    {
        var product = await _context.Products
            .FirstOrDefaultAsync((p) => p.ProductId == id) ?? throw new Exception("Product not found.");
        return product;
    }


    public async Task<Product> UpdateProductAsync(Guid id, ProductRequestDto product)
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


        if (categories.Count() != productReq.Categories.Count())
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