using kounga_erp.api.Domain.Abstractions;
using Microsoft.AspNetCore.Identity;
using System.Collections;

namespace kounga_erp.api.Domain.Models;

public class Role : IdentityRole<long>, IEntity<long>
{
    // Extended Columns
    public string? Description { get; set; }
    public bool IsActive { get; set; } = true;

    // Audit Columns
    public DateTime? CreatedAt { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? LastModified { get; set; }
    public string? LastModifiedBy { get; set; }
}
