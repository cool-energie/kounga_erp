namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class RoleService(IRoleRepository repository, RoleManager<Role> roleManager) : IRoleService
{
    public async Task<IdentityResult> Create<T>(T entity)
    {
        Role _role = new Role();
        Functions.ObjectAssign<Role, T>(_role, entity);
        _role.CreatedAt = DateTime.Now;
        return await roleManager.CreateAsync(_role);
    }

    public async Task<IdentityResult> Delete(long id)
    {
        var role = await roleManager.FindByIdAsync(id.ToString());
        if (role == null)
        {
            throw new NotFoundException("Role", id);
        }
        return await roleManager.DeleteAsync(role);
    }

    public async Task<IdentityResult> Edit<T>(long id, T patch)
    {
        var role = await roleManager.FindByIdAsync(id.ToString());
        if (role == null)
        {
            throw new NotFoundException("Role", id);
        }
        else
        {
            Functions.ObjectAssign<Role, T>(role, patch);
            return await roleManager.UpdateAsync(role);
        }
    }

    public async Task<PagedDataResponse<Role>> GetPage(PagedDataQuery query)
    {
        return await repository.GetPage(query, false, true);
    }
}
