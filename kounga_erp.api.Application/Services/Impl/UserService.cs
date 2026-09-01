namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class UserService(IUserRepository repository, UserManager<User> userManager) : IUserService
{
    public async Task Edit(User user, string? password)
    {
        if(user.Id <= 0)
        {
            await userManager.CreateAsync(user, password!);
        } else {
            User? _user = await userManager.FindByIdAsync(user.Id.ToString());
            if (_user == null)
            {
                throw new NotFoundException("User",  user.Id);
            }
            else
            {
                await userManager.UpdateAsync(user);
                if (password != null)
                {
                    var token = await userManager.GeneratePasswordResetTokenAsync(_user);
                    await userManager.ResetPasswordAsync(user, token, password);
                }
            }
        }
    }

    public async Task<PagedDataResponse<User>> GetPage(PagedDataQuery query)
    {
        return await repository.GetPage(query, true, true);
    }
}
