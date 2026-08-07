using Microsoft.AspNetCore.Identity;

namespace kounga_erp.api.Application.Services;

public interface IAccountService
{
    Task<IdentityResult> RegisterUserAsync(string email, string password, string firstName, string lastName, DateTime dateOfBirth, string phoneNumber);
    Task<IdentityResult> ConfirmEmailAsync(long userId, string token);
}
