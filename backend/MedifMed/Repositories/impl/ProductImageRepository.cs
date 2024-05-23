using MedifMed.Database;
using MedifMed.Dtos.ProductImageDtos;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Repositories.impl
{
    public class ProductImageRepository: IProductImageRepository
    {
        private readonly ApplicationDBContext _context;

        public ProductImageRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<List<ProductImage>> GetProductImagesAsync(Guid productId)
        {
            var product = await _context.Products.Include(p => p.ProductImages)
                .FirstOrDefaultAsync(p => p.ProductId == productId) ?? throw new Exception($"Product with id{productId} was not found.");
            return product.ProductImages;
        }
        public async Task<ProductImage> CreateProductImageAsync(ProductImageRequestDto productImage)
        {
            var image = new ProductImage() { CreatedOn = DateTime.Now, ProductId = productImage.ProductId, Url = productImage.Url };
             _context.ProductImages.Add(image);
            await _context.SaveChangesAsync();
            return image;
        }
        public async Task<List<ProductImage>> CreateProductImagesAsync(List<ProductImageRequestDto> productImages)
        {
            var images = productImages.Select(i => new ProductImage() { CreatedOn = DateTime.Now, ProductId = i.ProductId, Url = i.Url }).ToList();
            _context.ProductImages.AddRange(images);
            await _context.SaveChangesAsync();
            return images;
        }

        public async Task<List<ProductImage>> UpdateProductImagesAsync(List<ProductImageRequestDto> productImages, Guid productId)
        {
            var product = await _context.Products
                .Include(p => p.ProductImages)
                .FirstOrDefaultAsync(p => p.ProductId == productId) 
                ?? throw new Exception($"Product with id{productId} was not found.");
            await DeleteProductImageAsync(product.ProductImages);
            var images = productImages
                .Select(i => new ProductImage
                { 
                    ProductId = product.ProductId,
                    Url = i.Url, CreatedOn = DateTime.Now
                }).ToList();
            
            product.ProductImages.AddRange(images);
            await _context.SaveChangesAsync();
            return images;
        }

        public async Task<bool> DeleteProductImageAsync(List<ProductImage> productImage)
        {
            try
            {
                foreach (var image in productImage)
                {

                    _context.ProductImages.Remove(image);
                }
            }
            catch(Exception e)
            {
                await Console.Out.WriteLineAsync(e.Message);
                return false;
            }
            
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
