namespace kounga_erp.api.Controllers;


[Route("[controller]")]
[ApiController]
public class UsersController(IUserService userService) : ControllerBase
{
    [HttpGet("page")]
    public async Task<PagedDataResponse<User>> getPage(PagedDataQueryValidator queryValidator, [FromQuery] PagedDataQuery query)
    {
        await queryValidator.ValidateAndThrowAsync(query);
        return await userService.GetPage(query);
    }

    [HttpPatch]
    public async Task edit(IValidator<EditUserDTO> validator, [FromBody] EditUserDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        //User user = new User{ FirstName = dto.firstName, LastName = dto.lastName, Email = dto.email, UserName = dto.email, PhoneNumber = dto.phoneNumber, DateOfBirth = DateTime.Parse(dto.dateOfBirth), IsActive = dto.isActive };
        await userService.Edit<EditUserDTO>(dto.Id, dto);
    }


    [HttpPost("create")]
    public async Task create(IValidator<CreateUserDTO> validator, [FromBody] CreateUserDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        await userService.Create<CreateUserDTO>(dto, dto.Password);
    }

    [HttpPost("change-password")]
    public async Task changePassword(IValidator<ChangePasswordDTO> validator, [FromBody] ChangePasswordDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        await userService.ChangePassword(dto.userId, dto.newPassword);
    }

    [HttpDelete("{userId}")]
    public async Task delete(IValidator<DeleteUserDTO> validator, [FromRoute] long userId)
    {
        var dto = new DeleteUserDTO(userId);
        await validator.ValidateAndThrowAsync(dto);
        await userService.Delete(userId);
    }
}
