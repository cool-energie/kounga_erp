namespace kounga_erp.api.Application.Services;

public interface IService<E> where E : class
{
    Task<PagedDataResponse<E>> GetPage(PagedDataQuery query);
    Task<IdentityResult> Create<T>(T entity);
    Task<IdentityResult> Edit<T>(long id, T patch);
    Task<IdentityResult> Delete(long id);

}
