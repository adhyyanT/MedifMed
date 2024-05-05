using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Database;

public class ApplicationDBContext: DbContext
{
    public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
    {
        
    }
    public DbSet<Product> Products { get; set; }
    public DbSet<ProductDetail> ProductDetails { get; set; }
}