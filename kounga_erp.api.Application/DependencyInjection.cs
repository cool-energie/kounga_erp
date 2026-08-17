using kounga_erp.api.Application.Abstracts;
using kounga_erp.api.Application.Services;
using kounga_erp.api.Application.Services.Impl;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
namespace kounga_erp.api.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
    {
        services.Scan(scan => scan
            .FromAssemblyOf<IAccountService>()
            .AddClasses(c => c.WithAttribute<InjectableAttribute>())
            .AsImplementedInterfaces()
            .WithScopedLifetime());

        services.AddSingleton<IEmailSender, EmailService>();
        //services.AddTokenProvider<DataProtectorTokenProvider<User>>(TokenOptions.DefaultProvider);

        return services;
    }
}
