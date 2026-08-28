using Microsoft.AspNetCore.Authorization;

namespace kounga_erp.api.Controllers;


[Route("[controller]")]
[ApiController]
public class UsersController(IUserService userService, PagedDataQueryValidator queryValidator) : ControllerBase
{
    [HttpGet("page")]
    public async Task<PagedDataResponse<User>> getPage([FromQuery] PagedDataQuery query)
    {
        await queryValidator.ValidateAndThrowAsync(query);
        return await userService.GetPage(query);
    }
}
