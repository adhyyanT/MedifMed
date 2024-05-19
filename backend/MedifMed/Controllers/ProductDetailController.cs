using MedifMed.Mappers;
using MedifMed.Repositories;
using MedifMed.Repositories.impl;
using Microsoft.AspNetCore.Mvc;

namespace MedifMed.Controllers
{
    [Route("api/productdetail")]
    public class ProductDetailController: ControllerBase
    {
        private readonly IProductDetailRepository _detailRepo;

        public ProductDetailController(IProductDetailRepository detailRepo)
        {
            _detailRepo = detailRepo;
        }

        

        [HttpGet("{id}")]
        [ActionName(nameof(GetProductDetail))]
        public async Task<IActionResult> GetProductDetail([FromRoute] Guid id)
        {
            var productDetail = await _detailRepo.GetProductDetailAsync(id);
            return Ok(productDetail.ToProductDetailResponse());
        }
    }
}
