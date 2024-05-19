using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.Category
{
    public class CategoryRequestDto
    {
        [Required]
        [MaxLength(10)]
        public string Name { get; set; } = string.Empty;
    }
}
