namespace kounga_erp.api.Controllers;


[Route("[controller]")]
[ApiController]
public class UsersController(IUserService userService) : ControllerBase
{
    [HttpGet("page")]
    public async Task<IActionResult> getPage(PagedDataQueryValidator queryValidator, [FromQuery] PagedDataQuery query)
    {
        await queryValidator.ValidateAndThrowAsync(query);
        var result = await userService.GetPage(query);
        return Ok(result);
    }

    [HttpPatch]
    public async Task<IActionResult> edit(IValidator<EditUserDTO> validator, [FromBody] EditUserDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        //User user = new User{ FirstName = dto.firstName, LastName = dto.lastName, Email = dto.email, UserName = dto.email, PhoneNumber = dto.phoneNumber, DateOfBirth = DateTime.Parse(dto.dateOfBirth), IsActive = dto.isActive };
        IdentityResult result = await userService.Edit<EditUserDTO>(dto.Id, dto);
        if(!result.Succeeded)
        {
            throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));
        }
        return Ok();
    }

    [HttpPost]
    public async Task<IActionResult> create(IValidator<CreateUserDTO> validator, [FromBody] CreateUserDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        IdentityResult result = await userService.Create<CreateUserDTO>(dto, dto.Password);
        if(!result.Succeeded)
        {
            throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));
        }
        return Ok();
    }

    [HttpPost("change-password")]
    public async Task<IActionResult> changePassword(IValidator<ChangePasswordDTO> validator, [FromBody] ChangePasswordDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        await userService.ChangePassword(dto.userId, dto.newPassword);
        return Ok();
    }

    [HttpDelete("{userId}")]
    public async Task<IActionResult> delete(IValidator<DeleteEntityDTO> validator, [FromRoute] long userId)
    {
        var dto = new DeleteEntityDTO(userId);
        await validator.ValidateAndThrowAsync(dto);
        IdentityResult result = await userService.Delete(userId);
        if(!result.Succeeded)
        {
            throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));
        }
        return Ok();
    }
}
