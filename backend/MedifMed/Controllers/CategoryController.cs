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
            var categories = await _categoryRepo.GetCategories();
            return Ok(categories.Select(c => c.ToCategoryResponseDto()));
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCategory([FromRoute] Guid id)
        {
            try
            {
                var category = await _categoryRepo.GetCategory(id);
                return Ok(category.ToCategoryResponseDto());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
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
                var categoryResponse = await _categoryRepo.CreateCategory(category);
                return CreatedAtAction(nameof(GetCategory), new { id = categoryResponse.CategoryId },category);
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

        }
    }
}
