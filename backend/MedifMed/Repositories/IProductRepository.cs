using MedifMed.Dtos.Product;
using MedifMed.Models;

namespace MedifMed.Repositories;

public interface IProductRepository
{
    Task<List<ProductResponseDto>> GetAllProducts();
}