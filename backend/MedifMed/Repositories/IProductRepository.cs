using MedifMed.Models;

namespace MedifMed.Repositories;

public interface IProductRepository
{
    Task<List<Product>> GetAllProducts();
}