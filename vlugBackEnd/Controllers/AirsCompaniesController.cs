using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vlugBackEnd.Models;
using vlugBackEnd.ModelsDTOs;

namespace vlugBackEnd.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class AirsCompaniesController : ControllerBase
    {
        private readonly VlugDbContext DB;
        private readonly IMapper mapper;

        public AirsCompaniesController(VlugDbContext DB, IMapper mapper)
        {
            this.DB = DB;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<AirCompanyModel>>> GetList()
        {
            List<AirsCompany> query = await DB.AirsCompanies.ToListAsync();
            string host = $"{Request.Scheme}://{Request.Host}/";
            if (host.Contains("bdevelopment.net")) host += "vlug/";
            query.ForEach(comp => { comp.LogoUrl = host + comp.LogoUrl; });
            return Ok(mapper.Map<List<AirCompanyModel>>(query));
        }
        [HttpGet("{Name}")]
        public async Task<ActionResult<AirCompanyModel>> GetCompanyByName(string Name)
        {
            AirsCompany airsCompany = await DB.AirsCompanies.Where(whe => whe.NameComp.Equals(Name)).FirstOrDefaultAsync();
            if (airsCompany == null) return NotFound();

            string host = $"{Request.Scheme}://{Request.Host}/";
            if (host.Contains("bdevelopment.net")) host += "vlug/";
            airsCompany.LogoUrl = host + airsCompany.LogoUrl;
            return mapper.Map<AirCompanyModel>(airsCompany);
        }

    }
}
