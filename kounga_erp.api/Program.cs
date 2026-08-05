using kounga_erp.api.Infrastructure;
using kounga_erp.api.Application;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost:5173", "https://localhost:5173")
            .AllowAnyHeader().AllowAnyMethod();
        });
});
builder.Services.AddControllers();

builder.Services
    .AddInfrastructureServices(builder.Configuration)
    .AddApplicationServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.


app.UseRouting();

app.UseCors(MyAllowSpecificOrigins);

app.UseHsts();

app.UseHttpsRedirection();

app.MapControllers();

app.UseInfrastructureServices();

app.Run();
