using MedifMed.Dtos.Product;
using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Models;

namespace MedifMed.Repositories;

public interface IProductRepository
{
    Task<List<Product>> GetAllProductsAsync(int page,int sort);
    Task<Product> GetProductByIdAsync(Guid id);
    Task<Product> UpdateProductAsync(Guid id,ProductRequestDto product);
    Task<Product> CreateProduct(ProductCreateRequestDto productReq);
}