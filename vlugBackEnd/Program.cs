using vlugBackEnd;
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
Startup starup = new(builder.Configuration);
starup.ConfigurationServices(builder.Services);
WebApplication app = builder.Build();
starup.Configure(app, app.Environment);
app.Run();




//