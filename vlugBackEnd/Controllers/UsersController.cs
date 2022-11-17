using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vlugBackEnd.Entity;
using vlugBackEnd.Models;

namespace vlugBackEnd.Controllers
{
    [ApiController]
    [Route("api/V1/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly VlugDbContext dbContext;

        public UsersController(VlugDbContext dbContext)
        {
            this.dbContext = dbContext;
        }     



        [HttpGet("list")]
        public async Task<ActionResult<List<User>>> GetList()
        {
            List<User> listUsers = await dbContext.Users.ToListAsync();
            if (listUsers == null) return NotFound();
            return Ok(listUsers);

        }





    }
}
