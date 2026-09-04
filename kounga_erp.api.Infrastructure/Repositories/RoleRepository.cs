namespace kounga_erp.api.Infrastructure.Repositories;

[Injectable]
public class RoleRepository : Repository<Role>, IRoleRepository
{
    public RoleRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }

    public override Func<Role, bool> getQuery(FilterQuery filter)
    {
        return filter.field switch
        {
            "name" => (s => s.Name.Contains(filter.value, StringComparison.OrdinalIgnoreCase)),
            "isActive" => (s => s.IsActive == bool.Parse(filter.value)),
        };
    }

    public override Func<Role, object?> getSort(SortQuery sort)
    {
        throw new NotImplementedException();
    }
}
