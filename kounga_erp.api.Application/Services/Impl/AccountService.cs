using kounga_erp.api.Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;


namespace kounga_erp.api.Application.Services.Impl;

public class AccountService(
        UserManager<User> userManager,
        SignInManager<User> signInManager,
        IEmailService emailService,
        IConfiguration configuration
    ) : IAccountService
{    
    public async Task<IdentityResult> RegisterUserAsync(string email, string password, string firstName, string lastName, DateTime dateOfBirth, string phoneNumber)
    {
        User user = new User
        {
            UserName = email,
            Email = email,
            FirstName = firstName,
            LastName = lastName,
            DateOfBirth = dateOfBirth,
            PhoneNumber = phoneNumber,
            CreatedAt = DateTime.UtcNow,
            IsActive = true
        };

        IdentityResult result = await userManager.CreateAsync( user, password );
        if (!result.Succeeded) {
            return result;
        }

      /*  IdentityResult roleAssignmentResult = await userManager.AddToRoleAsync(user, "User");
        if (!roleAssignmentResult.Succeeded) {
            return roleAssignmentResult;
        }*/

        string token = await userManager.GenerateEmailConfirmationTokenAsync(user);
        string baseUrl = configuration["AppSettings:BaseUrl"]!;
        string confirmationLink = $"{baseUrl}/api/account/confirm-email?userId={user.Id}&token={Uri.EscapeDataString(token)}";
        await emailService.SendRegistrationConfirmationEmail(user.Email, user.FirstName!, confirmationLink);


        return IdentityResult.Success;
    }
}
