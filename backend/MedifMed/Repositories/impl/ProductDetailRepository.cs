using MedifMed.Database;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Repositories.impl
{
    public class ProductDetailRepository : IProductDetailRepository
    {
        private readonly ApplicationDBContext _context;

        public ProductDetailRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<ProductDetail> GetProductDetailAsync(Guid id)
        {
            var productDetail = await _context.ProductDetails.FirstOrDefaultAsync(p => p.ProductDetailId == id) ?? throw new Exception($"Product detail with id {id} was not found");

            return productDetail;
        }
    }
}
