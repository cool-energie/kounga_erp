namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class UserService(IUserRepository repository) : IUserService
{
    public async Task<PagedDataResult<User>> GetPage(IPagedDataRequest request)
    {
        return await repository.GetPage(request);
    }
}
