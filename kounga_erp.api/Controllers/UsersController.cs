namespace kounga_erp.api.Controllers;

[Route("[controller]")]
[ApiController]
public class UsersController(IUserService userService) : ControllerBase
{
    [HttpGet("page")]
    public async Task<PagedDataResult<User>> getPage([FromQuery] PagedDataRequestDTO dto)
    {
        return await userService.GetPage(dto);
    }
}
