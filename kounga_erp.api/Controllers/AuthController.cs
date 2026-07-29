using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace kounga_erp.api.Controllers;

[Authorize]
[Route("")]
public class AuthController(SignInManager<IdentityUser> signInManager) : ControllerBase
{
    [HttpPost("logout")]
    public async Task<IResult> logout([FromBody] object empty) 
    {
        if (empty != null)
        {
            await signInManager.SignOutAsync();
            return Results.Ok();
        }
        return Results.Unauthorized();
    }
}
