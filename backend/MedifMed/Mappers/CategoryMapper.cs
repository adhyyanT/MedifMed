using MedifMed.Dtos.Category;
using MedifMed.Models;

namespace MedifMed.Mappers
{
    public static class CategoryMapper
    {
        public static CategoryResponseDto ToCategoryResponseDto(this Category category)
        {
            return new CategoryResponseDto()
            {
                Name = category.Name,
                CategoryId = category.CategoryId,
                CategoryImage = category.CategoryImage
            };
        }
    }
}
