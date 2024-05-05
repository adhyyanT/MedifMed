using MedifMed.Database;
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

    public Task<List<Product>> GetAllProducts()
    {
        return _context.Products.ToListAsync();
    }
}