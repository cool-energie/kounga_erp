using kounga_erp.api.Application.Models;

namespace kounga_erp.api.Application.Services;

public interface IUserService
{
    Task<PagedDataResult<User>> GetPage(IPagedDataRequest request);
}
