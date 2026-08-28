namespace kounga_erp.api.Application.Services;

public interface IUserService
{
    Task<PagedDataResponse<User>> GetPage(PagedDataQuery request);
}
