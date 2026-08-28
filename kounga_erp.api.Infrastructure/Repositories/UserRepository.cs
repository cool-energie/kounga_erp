using kounga_erp.api.Application.Abstracts;
using kounga_erp.api.BuildingBlocks.Helpers;
using kounga_erp.api.Domain.Models;
using kounga_erp.api.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace kounga_erp.api.Infrastructure.Repositories;

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(ApplicationDbContext dbContext) : base(dbContext)
    {
    }

    public override Func<User, bool> getQuery(FilterQuery filter)
    {
        return filter.field switch
        {
            "firstName" => (s => s.FirstName.Contains(filter.value, StringComparison.OrdinalIgnoreCase)),
            "lastName" => (s => s.LastName.Contains(filter.value, StringComparison.OrdinalIgnoreCase)),
            "userName" => (s => s.UserName.Contains(filter.value, StringComparison.OrdinalIgnoreCase)),
            "createdAt" => filter.op switch {
                "eq" => s => s.CreatedAt == null ? false : s.CreatedAt.Value.Date == Functions.GetDate(filter.value).Date,
                "bw" => s =>
                {
                    List<DateTime> values = filter.value.Split(',').ToList().ConvertAll(v => Functions.GetDate(v).Date);
                    if (values.Count > 1) return values[0] <= s.CreatedAt && s.CreatedAt.Value.Date < values[1];
                    return true;
                }

            } /*(filter.op == "eq" ? s => s.CreatedAt == filter.value : s =>
            {
                List<DateTime> values = filter.value.Split(',').ToList().ConvertAll(v => DateTime.Parse(v));
                if(values.Count() > 1) return (values <= s.CreatedAt < values[1]);
            }),*/
        };
    }

    public override Func<User, object?> getSort(SortQuery sort) {
         return sort.key switch
        {
            "firstName" => (s =>  s.FirstName),
            "lastName" => (s =>  s.LastName),
            "email" => (s =>  s.Email),
            "createdAt" => (s =>  s.CreatedAt),
            "isActive" => (s =>  s.IsActive),
            _ => (s => null),
        };
    }
}
