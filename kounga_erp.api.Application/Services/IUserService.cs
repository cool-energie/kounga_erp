namespace kounga_erp.api.Application.Services;

public interface IUserService
{
    Task<PagedDataResponse<User>> GetPage(PagedDataQuery request);
    Task Create<T>(T user, string password);
    Task Edit<T>(long userId, T patch);
    Task ChangePassword(long userId, string newPassword);
    Task Delete(long userId);
}
