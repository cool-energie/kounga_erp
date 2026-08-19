using kounga_erp.api.Application.Abstracts;
using kounga_erp.api.Domain.Models;
using kounga_erp.api.Infrastructure.Data;

namespace kounga_erp.api.Infrastructure.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }
}
