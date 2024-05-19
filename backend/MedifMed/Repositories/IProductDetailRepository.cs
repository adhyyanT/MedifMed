using MedifMed.Models;

namespace MedifMed.Repositories
{
    public interface IProductDetailRepository
    {
        Task<ProductDetail> GetProductDetailAsync(Guid id);
    }
}
