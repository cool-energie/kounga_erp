namespace kounga_erp.api.Application.Abstractions;

public interface IRepository<TEntity> where TEntity : class
{
    Task<TEntity> CreateAsync(TEntity entity);
    Task<TEntity> UpdateAsync(TEntity entity);
    Task DeleteAsync(TEntity entity);
    Task<PagedDataResponse<TEntity>> GetPage(PagedDataQuery query, Boolean withSort = false, Boolean withFilter = false);
}
