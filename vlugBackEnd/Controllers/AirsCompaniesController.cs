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
        public async Task<ActionResult<List<AirCompanyModel>>> Get()
        {
            List<AirsCompany> query = await DB.AirsCompanies.ToListAsync();
           
            string host = $"{Request.Scheme}://{Request.Host}/";
            query.ForEach(comp =>
            {
                comp.LogoUrl = host + comp.LogoUrl; 
            });

            return Ok(mapper.Map<List<AirCompanyModel>>(query));


        }
    }
}
