using FluentValidation;
using kounga_erp.api.Application.Services;
using kounga_erp.api.DTO;
using Microsoft.AspNetCore.Mvc;

namespace kounga_erp.api.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController(IAccountService accountService) : ControllerBase
{
   /* [HttpPost("logout")]
    public async Task<IResult> logout([FromBody] object empty) 
    {
        if (empty != null)
        {
            await signInManager.SignOutAsync();
            return Results.Ok();
        }
        return Results.Unauthorized();
    }*/

    [HttpPost("register")]
    public async Task<IResult> Register(IValidator<RegisterUserDto> validator, [FromBody] RegisterUserDto dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        // Implementation for user registration
        var result = await accountService.RegisterUserAsync(
            dto.email,
            dto.password,
            dto.firstName,
            dto.lastName,
            DateTime.Parse(dto.dateOfBirth),
            dto.phoneNumber
        );

        if (result.Succeeded)
        {
            return Results.Ok();
        }

        return Results.InternalServerError();
    }

    [HttpGet("confirm-email")]
    public async Task<IResult> ConfirmEmail([FromQuery] Guid userId, [FromQuery] string token)
    {
        var result = await accountService.ConfirmEmailAsync(userId, token);
        if (result.Succeeded)
        {
            return Results.Ok();
        }
        return Results.BadRequest(result.Errors);
    }
}
