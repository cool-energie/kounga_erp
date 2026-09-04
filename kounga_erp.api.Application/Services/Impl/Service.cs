namespace kounga_erp.api.Application.Services.Impl;

public abstract class Service<E, R>(R repository) : IService<E> where E : class, new() where R : IRepository<E>
{
    public Task<IdentityResult> Create<T>(T entity)
    {
        throw new NotImplementedException();
    }

    public Task<IdentityResult> Delete(long id)
    {
        throw new NotImplementedException();
    }

    public Task<IdentityResult> Edit<T>(long id, T patch)
    {
        throw new NotImplementedException();
    }

    public Task<PagedDataResponse<E>> GetPage(PagedDataQuery request)
    {
        throw new NotImplementedException();
    }
}
