
using kounga_erp.api.Application.Services.Impl;

namespace kounga_erp.api.Controllers;


[Route("[controller]")]
[ApiController]
public class RolesController(IRoleService roleService) : ControllerBase
{
    [HttpGet("page")]
    public async Task<IActionResult> getPage(PagedDataQueryValidator queryValidator, [FromQuery] PagedDataQuery query)
    {
        await queryValidator.ValidateAndThrowAsync(query);
        var result = await roleService.GetPage(query);
        return Ok(result);
    }

    [HttpPost]
    public async Task<IActionResult> create(IValidator<CreateRoleDTO> validator, [FromBody] CreateRoleDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        IdentityResult result = await roleService.Create<CreateRoleDTO>(dto);
        if (!result.Succeeded)
        {
            throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));
        }
        return Ok();
    }

    [HttpPatch]
    public async Task<IActionResult> edit(IValidator<EditRoleDTO> validator, [FromBody] EditRoleDTO dto)
    {
        await validator.ValidateAndThrowAsync(dto);
        IdentityResult result = await roleService.Edit<EditRoleDTO>(dto.Id, dto);
        if (!result.Succeeded)
        {
            throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));
        }
        return Ok();
    }

    [HttpDelete("{roleId}")]
    public async Task<IActionResult> delete(IValidator<DeleteEntityDTO> validator, [FromRoute] long roleId)
    {
        var dto = new DeleteEntityDTO(roleId);
        await validator.ValidateAndThrowAsync(dto);
        IdentityResult result = await roleService.Delete(roleId);
        if (!result.Succeeded)
        {
            throw new Exception(string.Join(", ", result.Errors.Select(e => e.Description)));
        }
        return Ok();
    }

}
