using kounga_erp.api.Application.Data;
using kounga_erp.api.Domain.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


namespace kounga_erp.api.Infrastructure.Data;
internal class ApplicationDbContext : IdentityDbContext<User, Role, long>, IApplicationDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        // Rename tables to match the desired naming convention
        builder.Entity<User>(entity => entity.ToTable("Users"));
        builder.Entity<Role>(entity => entity.ToTable("Roles"));
        builder.Entity<IdentityUserRole<long>>(entity => entity.ToTable("UserRoles"));
        builder.Entity<IdentityUserClaim<long>>(entity => entity.ToTable("UserClaims"));
        builder.Entity<IdentityUserLogin<long>>(entity => entity.ToTable("UserLogins"));
        builder.Entity<IdentityUserToken<long>>(entity => entity.ToTable("UserTokens"));
        builder.Entity<IdentityRoleClaim<long>>(entity => entity.ToTable("RoleClaims"));
    }

    public DbSet<Address> Addresses { get; set; }
}
