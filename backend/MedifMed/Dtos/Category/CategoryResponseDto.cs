using System.ComponentModel.DataAnnotations;

namespace MedifMed.Dtos.Category
{
    public class CategoryResponseDto
    {
        public Guid CategoryId { get; set; }

        [MaxLength(50)]
        public required string Name { get; set; }
        public string CategoryImage { get; set; } = string.Empty;
    }
}
