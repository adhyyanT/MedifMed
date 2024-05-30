using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.Category
{
    public class CategoryRequestDto
    {
        [Required]
        [MaxLength(50)]
        public string Name { get; set; } = string.Empty;
        public string CategoryImage { get; set; } = string.Empty;
    }
}
