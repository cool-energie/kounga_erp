namespace kounga_erp.api.Application.Services;

public interface IUserService
{
    Task<PagedDataResponse<User>> GetPage(PagedDataQuery query);
    Task<IdentityResult> Create<T>(T user, string password);
    Task<IdentityResult> Edit<T>(long userId, T patch);
    Task<IdentityResult> ChangePassword(long userId, string newPassword);
    Task<IdentityResult> Delete(long userId);
}
