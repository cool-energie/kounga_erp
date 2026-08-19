using kounga_erp.api.Application.Abstractions;
using kounga_erp.api.Application.Abstracts;
using kounga_erp.api.Application.Models;
using kounga_erp.api.Infrastructure.Data;
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

    public async Task<PagedDataResult<TEntity>> GetPage(IPagedDataRequest request)
    {
        var total = await _dbContext.Set<TEntity>().CountAsync();
        var items = await _dbContext.Set<TEntity>()
            .Skip((request.page - 1) * request.itemsPerPage)
            .Take(request.itemsPerPage).ToListAsync();

        var response = new PagedDataResult<TEntity>(items, total);
        return response;
    }

    public async Task<TEntity> UpdateAsync(TEntity entity)
    {
        _dbContext.Set<TEntity>().Update(entity);
        await _dbContext.SaveChangesAsync();
        return entity;
    }
}
