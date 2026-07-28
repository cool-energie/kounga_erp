using kounga_erp.api.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace kounga_erp.api.Application.Data;
public interface IApplicationDbContext
{
    Task<int> SaveChangesAsync(CancellationToken cancellationToken);
}
