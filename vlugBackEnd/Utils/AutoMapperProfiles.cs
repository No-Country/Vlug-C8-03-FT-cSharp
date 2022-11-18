using AutoMapper;
using vlugBackEnd.Models;
using vlugBackEnd.ModelsDTOs;

namespace vlugBackEnd.Utils
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AirPortCityCountryCode, AirportCityModel>().ReverseMap();
            CreateMap<AirsCompany, AirCompanyModel>().ReverseMap();



        }
    }
}
