using MedifMed.Dtos.Category;
using MedifMed.Mappers;
using MedifMed.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers
{
    [Route("api/category")]
    public class CategoryController: ControllerBase
    {
        private readonly ICategoryRepository _categoryRepo;

        public CategoryController(ICategoryRepository categoryRepo)
        {
            _categoryRepo = categoryRepo;
        }

        [HttpGet("categories")]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await _categoryRepo.GetCategoriesAsync();
            return Ok(categories.Select(c => c.ToCategoryResponseDto()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategory([FromRoute] Guid id)
        {
            try
            {
                var category = await _categoryRepo.GetCategoryAsync(id);
                return Ok(category.ToCategoryResponseDto());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet("{id}/products")]
        public async Task<IActionResult> GetProductsOfCategory([FromRoute]Guid id)
        {
            var products = await _categoryRepo.GetProductsByCategoryAsync(id);
            return Ok(products.Select(p => p.ToProductResponse()));
        }
        [HttpPost]
        public async Task<IActionResult> CreateCategory([FromBody] CategoryRequestDto category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                var categoryResponse = await _categoryRepo.CreateCategoryAsync(category);
                return CreatedAtAction(nameof(GetCategory), new { id = categoryResponse.CategoryId },category);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory([FromRoute] Guid id)
        {
            try
            {
                var res = await _categoryRepo.DeleteCategoryAsync(id);

                return NoContent();
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
