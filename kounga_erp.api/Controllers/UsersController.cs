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

    [HttpPost("edit")]
    public async Task edit(IValidator<EditUserDTO> validator, [FromBody] EditUserDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        User user = new User{ FirstName = dto.firstName, LastName = dto.lastName, Email = dto.email, UserName = dto.email, PhoneNumber = dto.phoneNumber, DateOfBirth = DateTime.Parse(dto.dateOfBirth), IsActive = dto.isActive };
        if (dto.id != null)
        {
            user.Id = (long) dto.id;
        }

        await userService.Edit(user, dto.password);
    }
}
