using MedifMed.Dtos.Category;
using MedifMed.Models;

namespace MedifMed.Repositories
{
    public interface ICategoryRepository
    {
        Task<List<Category>> GetCategories();
        Task<Category> GetCategory(Guid id);
        Task<Category> GetCategoryByName(string name);
        Task<Category> CreateCategory(CategoryRequestDto category1);
    }
}
