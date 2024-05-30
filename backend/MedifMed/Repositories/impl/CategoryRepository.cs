using MedifMed.Database;
using MedifMed.Dtos.Category;
using MedifMed.Models;
using Microsoft.EntityFrameworkCore;

namespace MedifMed.Repositories.impl
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDBContext _context;

        public CategoryRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        

        public async Task<List<Category>> GetCategoriesAsync()
        {
            var categories = await _context.Categories.ToListAsync();
            return categories;
        }

        public async Task<Category> GetCategoryAsync(Guid id)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.CategoryId == id) ?? throw new Exception($"Category with ID {id} was not found.");

            return category;
        }

        public async Task<List<Product>> GetProductsByCategoryAsync(Guid id)
        {
            var category = await _context.Categories
                .Include(c => c.Products)
                .ThenInclude(p => p.ProductDetails)
                .FirstOrDefaultAsync(c => c.CategoryId == id) 
                ?? throw new Exception($"Category with Id {id} was not found.");
            return category.Products;
        }

        public async Task<Category?> GetCategoryByNameAsync(string name)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Name.Trim().ToLower() == name.Trim().ToLower());
            return category;
        }

        public async Task<Category> CreateCategoryAsync(CategoryRequestDto category)
        {
            var opCategory = await GetCategoryByNameAsync(category.Name);
            if (opCategory != null) throw new Exception($"{category.Name} already exists.");
            var categoryResponse = new Category() { Name = category.Name.Trim().ToLower(), CreatedOn = DateTime.Now,CategoryImage = category.CategoryImage };
            await _context.Categories.AddAsync(categoryResponse);
            await _context.SaveChangesAsync();
            return categoryResponse;
        }

        public async Task<Category> DeleteCategoryAsync(Guid id)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.CategoryId == id);
            if (category == null) throw new Exception($"Category with id {id} was not found.");
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
            return category;
        }

        
    }
}
