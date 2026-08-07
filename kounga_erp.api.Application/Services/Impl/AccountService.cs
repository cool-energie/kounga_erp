using kounga_erp.api.Application.Abstracts;
using kounga_erp.api.Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Configuration;
using System.Text;


namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
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
        string baseUrl = configuration["AppSettings:ClientBaseUrl"]!;
        string confirmationLink = $"{baseUrl}/account/confirm-email?userId={user.Id}&token={Uri.EscapeDataString(token)}";
        await emailService.SendRegistrationConfirmationEmail(user.Email, user.FirstName!, confirmationLink);


        return IdentityResult.Success;
    }

    public async Task<IdentityResult> ConfirmEmailAsync(Guid userId, string token)
    {
        if(userId == Guid.Empty || string.IsNullOrEmpty(token))
        {
            return IdentityResult.Failed(new IdentityError { Description = "Invalid user ID or token." });
        }

        var user = await userManager.FindByIdAsync(userId.ToString());
        if (user == null)
        {
            return IdentityResult.Failed(new IdentityError { Description = "User not found." });
        }

        var decodedBytes = WebEncoders.Base64UrlDecode(token);
        var decodedToken = Encoding.UTF8.GetString(decodedBytes);

        IdentityResult result = await userManager.ConfirmEmailAsync(user, decodedToken);
        return result;
    }

}
