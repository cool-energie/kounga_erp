namespace kounga_erp.api.Application.Services.Impl;

[Injectable]
public class UserService(IUserRepository repository) : IUserService
{
    public async Task<PagedDataResponse<User>> GetPage(PagedDataQuery query)
    {
        return await repository.GetPage(query, true, true);
    }
}
