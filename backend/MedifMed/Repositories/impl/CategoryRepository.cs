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

        

        public async Task<List<Category>> GetCategories()
        {
            var categories = await _context.Categories.ToListAsync();
            return categories;
        }

        public async Task<Category> GetCategory(Guid id)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.CategoryId == id) ?? throw new Exception($"Category with ID {id} was not found.");

            return category;
        }

        public async Task<Category?> GetCategoryByName(string name)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Name.Trim().ToLower() == name.Trim().ToLower());
            return category;
        }

        public async Task<Category> CreateCategory(CategoryRequestDto category)
        {
            var opCategory = await GetCategoryByName(category.Name);
            if (opCategory != null) throw new Exception($"{category.Name} already exists.");
            var categoryResponse = new Category() { Name = category.Name.Trim().ToLower(), CreatedOn = DateTime.Now };
            await _context.Categories.AddAsync(categoryResponse);
            await _context.SaveChangesAsync();
            return categoryResponse;
        }
    }
}
