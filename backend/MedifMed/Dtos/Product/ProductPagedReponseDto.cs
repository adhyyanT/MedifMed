using MedifMed.Dtos.Product;

namespace MedifMed.Models
{
    public class ProductPagedReponseDto
    {
        public List<Product> products { get; set; } = [];
        public int count { get; set; } = 0;
    }
}
