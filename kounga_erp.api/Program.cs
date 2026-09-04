using kounga_erp.api.Infrastructure;
using kounga_erp.api.Application;
using kounga_erp.api;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services
    .AddApiServices(builder.Configuration)
    .AddApplicationServices(builder.Configuration)
    .AddInfrastructureServices(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.


app.UseApiServices();
app.UseInfrastructureServices();

app.Run();