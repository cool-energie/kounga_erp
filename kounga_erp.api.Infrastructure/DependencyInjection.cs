using kounga_erp.api.Application.Abstracts;
using kounga_erp.api.Domain.Models;
using kounga_erp.api.Infrastructure.Data;
using kounga_erp.api.Infrastructure.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace kounga_erp.api.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("Database");
        services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));

        services.Configure<DataProtectionTokenProviderOptions>(options =>
        {
            options.TokenLifespan = TimeSpan.FromMinutes(30);
        });

        services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = configuration["JWT:Issuer"],
                ValidateAudience = true,
                ValidAudience = configuration["JWT:Audience"],
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:SigningKey"]!))
            };
        });

        services.Configure<IdentityOptions>(options =>
        {
            // Default SignIn settings.
            options.SignIn.RequireConfirmedEmail = true;
        });

        services.AddIdentityApiEndpoints<User>()
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders();


        //services.AddIdentityApiEndpoints<User>();
        //services.AddScoped<ApplicationDbContext>();
        services.AddScoped<IUserRepository, UserRepository>();
        return services;
    }

    public static WebApplication UseInfrastructureServices(this WebApplication app)
    {
        app.MapIdentityApi<User>();
        app.UseAuthentication();
        app.UseAuthorization();
        return app;
    }
}

