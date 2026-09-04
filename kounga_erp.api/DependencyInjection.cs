using kounga_erp.api.Exceptions.Handlers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace kounga_erp.api;

public static class DependencyInjection
{
    private static string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
    public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddControllers();
        services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                policy =>
                {
                    policy.WithOrigins("http://localhost:5173", "https://localhost:5173")
                    .AllowAnyHeader().AllowAnyMethod();
                });
        });
        services.AddExceptionHandler<CustomExceptionHandler>();
        services.AddValidatorsFromAssemblyContaining<RegisterUserDTOValidator>();
        services.AddProblemDetails();
        services.AddSingleton<PagedDataQueryValidator>();
        return services;
    }

    public static WebApplication UseApiServices(this WebApplication app)
    {
        app.UseRouting();
        app.UseCors(MyAllowSpecificOrigins);
        app.UseAuthentication();
        app.UseAuthorization();
        app.MapIdentityApi<User>();
        app.MapControllers().RequireAuthorization();
        app.UseHsts();
        app.UseHttpsRedirection();
        app.UseExceptionHandler(options => { });
        //app.MapIdentityApi<User>();
        return app;
    }
}