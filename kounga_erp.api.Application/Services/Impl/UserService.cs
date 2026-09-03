using System.Text.RegularExpressions;

namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class UserService(IUserRepository repository, UserManager<User> userManager) : IUserService
{
    public async Task Create<T>(T user, string password)
    {
        User _user = new User();
        Functions.ObjectAssign<User, T>(_user, user);
        _user.CreatedAt = new DateTime();
        await userManager.CreateAsync(_user, password);
    }

    public async Task ChangePassword(long userId, string newPassword)
    {
        var user = await userManager.FindByIdAsync(userId.ToString());
        if (user == null)
        {
            throw new NotFoundException("User", userId);
        }
        var token = await userManager.GeneratePasswordResetTokenAsync(user);
        await userManager.ResetPasswordAsync(user, token, newPassword);
    }

    public async Task Edit<T>(long userId, T patch)
    {
        User? _user = await userManager.FindByIdAsync(userId.ToString());
        if (_user == null)
        {
            throw new NotFoundException("User", userId);
        }
        else
        {
            Functions.ObjectAssign<User, T>(_user, patch);
            await userManager.UpdateAsync(_user);
        }
    }

    public async Task<PagedDataResponse<User>> GetPage(PagedDataQuery query)
    {
        return await repository.GetPage(query, true, true);
    }

    public async Task Delete(long userId)
    {
        var user = await userManager.FindByIdAsync(userId.ToString());
        if (user == null)
        {
            throw new NotFoundException("User", userId);
        }
        await userManager.DeleteAsync(user);
    }
}
