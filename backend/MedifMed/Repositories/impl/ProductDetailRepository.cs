using MedifMed.Database;
using MedifMed.Dtos.ProductDetailDtos;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Repositories.impl
{
    public class ProductDetailRepository : IProductDetailRepository
    {
        private readonly ApplicationDBContext _context;
        private readonly IProductRepository _productRepo;


        public ProductDetailRepository(ApplicationDBContext context, IProductRepository productRepo)
        {
            _context = context;
            _productRepo = productRepo;
        }

        public async Task<ProductDetail> GetProductDetailAsync(Guid id)
        {
            var productDetail = await _context.ProductDetails.FirstOrDefaultAsync(p => p.ProductDetailId == id) ?? throw new Exception($"Product detail with id {id} was not found");

            return productDetail;
        }

        public async Task<List<ProductDetail>> GetProductDetailsByProductIdAsync(Guid productId)
        {
            var product = await _productRepo.GetProductByIdAsync(productId);
            var productDetails = await _context.ProductDetails.Where(d => d.ProductId == productId).ToListAsync();
            return productDetails;
        }
        public async Task<ProductDetail> AddProductDetailAsync(ProductDetailCreateRequest productDetail,
    Guid productId)
        {
            var product = await _productRepo.GetProductByIdAsync(productId);
            ProductDetail details = new()
            {
                Title = productDetail.Title,
                Description = productDetail.Description,
                CreatedOn = DateTime.Now,
                ProductId = productId
            };
            await _context.ProductDetails.AddAsync(details);
            await _context.SaveChangesAsync();
            return details;
        }
    }
}
