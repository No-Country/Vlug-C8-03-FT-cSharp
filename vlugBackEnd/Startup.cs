using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using vlugBackEnd.Models;

namespace vlugBackEnd
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        public IConfiguration Configuration { get; }
        public void ConfigurationServices(IServiceCollection services)
        {
            services.AddDbContext<VlugDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("defaultConection")));
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
            services.AddSwaggerGen(gen => {
                gen.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "API VLUG", Version = "v1", Description = "App for booking flights" });
            });
            services.AddAutoMapper(typeof(Startup));
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
               
            }
            app.UseSwagger();
            app.UseSwaggerUI(options => {
                options.DefaultModelsExpandDepth(-1);
            });
            app.UseStaticFiles();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
