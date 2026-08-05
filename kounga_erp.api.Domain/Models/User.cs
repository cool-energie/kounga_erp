using kounga_erp.api.Domain.Abstractions;
using Microsoft.AspNetCore.Identity;

namespace kounga_erp.api.Domain.Models;

public class User : IdentityUser<long>, IEntity<long>
{
    // Extended Columns
    public string FirstName { get; set; } = null!;
    public string? LastName { get; set; }
    public DateTime? DateOfBirth { get; set; }
    public DateTime? LastLogin {  get; set; }
    public bool IsActive { get; set; }

    // Navigation Columns
    public virtual List<Address>? Addresses { get; set; }

    // Audit Columns
    public DateTime? CreatedAt { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? LastModified { get; set; }
    public string? LastModifiedBy { get; set; }
}