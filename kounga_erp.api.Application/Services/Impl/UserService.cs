namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class UserService(IUserRepository repository, UserManager<User> userManager) : IUserService
{
    public async Task<IdentityResult> Create<T>(T user, string password)
    {
        User _user = new User();
        Functions.ObjectAssign<User, T>(_user, user);
        _user.CreatedAt = DateTime.Now;
        _user.UserName = _user.Email;
        return await userManager.CreateAsync(_user, password);
    }

    public async Task<IdentityResult> ChangePassword(long userId, string newPassword)
    {
        var user = await userManager.FindByIdAsync(userId.ToString());
        if (user == null)
        {
            throw new NotFoundException("User", userId);
        }
        var token = await userManager.GeneratePasswordResetTokenAsync(user);
        return await userManager.ResetPasswordAsync(user, token, newPassword);
    }

    public async Task<IdentityResult> Edit<T>(long userId, T patch)
    {
        User? _user = await userManager.FindByIdAsync(userId.ToString());
        if (_user == null)
        {
            throw new NotFoundException("User", userId);
        }
        else
        {
            Functions.ObjectAssign<User, T>(_user, patch);
            _user.UserName = _user.Email;
            return await userManager.UpdateAsync(_user);
        }
    }

    public async Task<PagedDataResponse<User>> GetPage(PagedDataQuery query)
    {
        return await repository.GetPage(query, true, true);
    }

    public async Task<IdentityResult> Delete(long userId)
    {
        var user = await userManager.FindByIdAsync(userId.ToString());
        if (user == null)
        {
            throw new NotFoundException("User", userId);
        }
        return await userManager.DeleteAsync(user);
    }
}
