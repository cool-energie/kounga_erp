using Microsoft.EntityFrameworkCore;

namespace kounga_erp.api.Infrastructure.Repositories;

public abstract class Repository<TEntity> : IRepository<TEntity> where TEntity : class
{
    private ApplicationDbContext _dbContext;

    public Repository(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<TEntity> CreateAsync(TEntity entity)
    {
        _dbContext.Set<TEntity>().Add(entity);
        await _dbContext.SaveChangesAsync();

        return entity;
    }

    public async Task DeleteAsync(TEntity entity)
    {
        _dbContext?.Set<TEntity>().Remove(entity);
        await _dbContext!.SaveChangesAsync();
    }

    public async Task<PagedDataResponse<TEntity>> GetPage(PagedDataQuery query, Boolean withSort = false, Boolean withFilter = false)
    {
        var dbSet = _dbContext.Set<TEntity>();
        var total = await dbSet.CountAsync();
        var items = withSort ? addSorts(dbSet, query) : dbSet;
        items = withFilter ? addFilters(dbSet, query) : dbSet;
        items = items.Skip((query.page - 1) * query.itemsPerPage)
            .Take(query.itemsPerPage);
        var response = new PagedDataResponse<TEntity>(items.ToArray(), total);
        return response;
    }

    public async Task<TEntity> UpdateAsync(TEntity entity)
    {
        _dbContext.Set<TEntity>().Update(entity);
        await _dbContext.SaveChangesAsync();
        return entity;
    }

    public IQueryable<TEntity> addSorts(DbSet<TEntity> dbSet, PagedDataQuery query)
    {
        IQueryable<TEntity> items = dbSet;
        foreach (var s in query.getSortsList())
        {
            items = ((s.order == "asc") ? items.OrderBy(getSort(s)) : items.OrderByDescending(getSort(s))).AsQueryable();
        }

        return items;
    }

    public IQueryable<TEntity> addFilters(DbSet<TEntity> dbSet, PagedDataQuery query)
    {
        IQueryable<TEntity> items = dbSet;
        foreach (var f in query.getFiltersList())
        {
            items = items.Where(getQuery(f)).AsQueryable();
        }

        return items;
    }

    public abstract Func<TEntity, object?> getSort(SortQuery sort);
    
    public abstract Func<TEntity, bool> getQuery(FilterQuery filter);

}
