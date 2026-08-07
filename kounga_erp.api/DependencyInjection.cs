using FluentValidation;
using kounga_erp.api.DTO;
using kounga_erp.api.Exceptions;

namespace kounga_erp.api;

public static class DependencyInjection
{
    public static IServiceCollection AddApiServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddExceptionHandler<CustomExceptionHandler>();
        services.AddValidatorsFromAssemblyContaining<RegisterUserDtoValidator>();
        services.AddProblemDetails();
        return services;
    }

    public static WebApplication UseApiServices(this WebApplication app)
    {
        app.UseExceptionHandler(options => { });

        return app;
    }
}
