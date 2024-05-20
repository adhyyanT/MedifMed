using MedifMed.Dtos.Category;
using MedifMed.Models;

namespace MedifMed.Repositories
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetCategoriesAsync();
        Task<Category> GetCategoryAsync(Guid id);
        Task<List<Product>> GetProductsByCategoryAsync(Guid id);
        Task<Category?> GetCategoryByNameAsync(string name);
        Task<Category> CreateCategoryAsync(CategoryRequestDto category1);
        Task<Category> DeleteCategoryAsync(Guid id);
    }
}
