using kounga_erp.api.Domain.Abstractions;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace kounga_erp.api.Domain.Models;

public class Address : Entity<long>
{

    // Foreign Key to User
    [Required]
    public long UserId { get; set; }

    // Navigation Property to User
    [ForeignKey(nameof(UserId))]
    public virtual User User { get; set; } = null!;

    public string? Street { get; set; } = null!;
    public string? City { get; set; } = null!;
    public string? State { get; set; } = null!;
    public string? PostalCode { get; set; } = null!;
    public string? Country { get; set; } = null!;
    public bool isActive { get; set; } = true;
}

