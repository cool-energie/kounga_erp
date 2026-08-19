using kounga_erp.api.Application.Models;
using kounga_erp.api.Domain.Abstractions;

namespace kounga_erp.api.Application.Abstractions;

public interface IRepository<TEntity> where TEntity : class
{
    Task<TEntity> CreateAsync(TEntity entity);
    Task<TEntity> UpdateAsync(TEntity entity);
    Task DeleteAsync(TEntity entity);
    Task<PagedDataResult<TEntity>> GetPage(IPagedDataRequest request);
}
