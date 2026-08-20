using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Text;
using SignInResult = Microsoft.AspNetCore.Identity.SignInResult;


namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class AccountService(
        UserManager<User> userManager,
        SignInManager<User> signInManager,
        IEmailService emailService,
        IConfiguration configuration
    ) : IAccountService
{
/*
     public async Task<SignInResult> LoginUserAsync(string email, string password, bool rememberMe)
     {
         var user = await userManager.FindByEmailAsync(email);

         if (user == null) return SignInResult.Failed;
        var result = await signInManager.PasswordSignInAsync(user.UserName, password, rememberMe, false);
        if (result.Succeeded) return SignInResult.Success;
        if(result.IsLockedOut) return SignInResult.LockedOut;
        if (result.RequiresTwoFactor) return SignInResult.TwoFactorRequired;
//        if(res)
     }*/

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

        await sendConfirmEmailAsync(user);
        return IdentityResult.Success;
    }

    public async Task<IdentityResult> ConfirmEmailAsync(long userId, string token)
    {
        if (userId <= 0 || string.IsNullOrEmpty(token))
        {
            return IdentityResult.Failed(new IdentityError { Description = "Invalid user ID or token." });
        }

        var user = await userManager.FindByIdAsync(userId.ToString());
        if (user == null)
        {
            return IdentityResult.Failed(new IdentityError { Description = "User not found." });
        }

        IdentityResult result = await userManager.ConfirmEmailAsync(user, token);
        return result;
    }

    public async Task sendConfirmEmailAsync(User user)
    {
        string token = await userManager.GenerateEmailConfirmationTokenAsync(user);
        string baseUrl = configuration["AppSettings:ClientBaseUrl"]!;
        string confirmationLink = $"{baseUrl}/account/confirm-email?userId={user.Id}&token={Uri.EscapeDataString(token)}";
        await emailService.SendAccountCreatedEmail(user.Email, user.FirstName!, confirmationLink);
    }

    public async Task sendConfirmEmailAsync(string email)
    {
        User user = await userManager.FindByEmailAsync(email);
        await sendConfirmEmailAsync(user);
    }

}
