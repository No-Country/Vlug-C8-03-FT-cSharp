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
        public async Task<ActionResult<List<AirPortCityModel>>> GeList()
        {
            List<AirPortCityCountryCode> listAirport = await DB.AirPortCityCountryCodes.ToListAsync();
            return Ok(mapper.Map<List<AirPortCityModel>>(listAirport));
        }
        [HttpGet("{Id:int}")]
        public async Task<ActionResult<AirPortCityModel>>GetById(int Id)
        {
            AirPortCityCountryCode cityCountryCode = await DB.AirPortCityCountryCodes.FindAsync(Id);
            if (cityCountryCode == null) return NotFound();

            return mapper.Map<AirPortCityModel>(cityCountryCode);

        }
        [HttpGet("countries")]
        public async Task<ActionResult<List<string>>> GetConuntries()
        {
            List<string> conuntries = await DB.AirPortCityCountryCodes.Select(sel => sel.Country).OrderBy(ord => ord).Distinct().ToListAsync();
            return Ok(conuntries);

        }
        [HttpGet("country/{Name}")]
        public async Task<ActionResult<List<AirPortCityModel>>> GetCountry(string Name)
        {
            List<AirPortCityCountryCode> listAirport = await DB.AirPortCityCountryCodes.Where(colum => colum.Country.Contains(Name)).ToListAsync();
            return Ok(mapper.Map<List<AirPortCityModel>>(listAirport));

        }
        [HttpGet("city/{Name}")]
        public async Task<ActionResult<List<AirPortCityModel>>> GetCity(string Name)
        {
            List<AirPortCityCountryCode> listAirport = await DB.AirPortCityCountryCodes.Where(whe => whe.City.Contains(Name)).ToListAsync();
            return Ok(mapper.Map<List<AirPortCityModel>>(listAirport));

        }
        [HttpGet("IATAcode/{Code}")]
        public async Task<ActionResult<AirPortCityModel>> GetAirPortByCode(string Code)
        {
            AirPortCityCountryCode cityCountryCode = await DB.AirPortCityCountryCodes.Where(colum => colum.Code.Equals(Code)).FirstOrDefaultAsync();
            if (cityCountryCode == null) return NotFound();
            return Ok(mapper.Map<AirPortCityModel>(cityCountryCode));
        }










    }
}
