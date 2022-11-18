using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vlugBackEnd.Models;

namespace vlugBackEnd.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly VlugDbContext DB;

        public UsersController(VlugDbContext DB)
        {
            this.DB = DB;
        }     



        //[HttpGet()]
        //public async Task<ActionResult<List<User>>> GetList()
        //{
        //    List<User> listUsers = await dbContext.Users.ToListAsync();
        //    if (listUsers == null) return NotFound();
        //    return Ok(listUsers);

        //}





    }
}
