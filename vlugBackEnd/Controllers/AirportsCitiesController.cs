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
    public class AirportsCitiesController : ControllerBase
    {
        private readonly VlugDbContext DB;
        private readonly IMapper mapper;

        public AirportsCitiesController(VlugDbContext DB, IMapper mapper)
        {
            this.DB = DB;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<AirportCityModel>>> Get()
        {
            List<AirPortCityCountryCode> listAirport = await DB.AirPortCityCountryCodes.ToListAsync();
            return Ok(mapper.Map<List<AirportCityModel>>(listAirport));
        }








    }
}
