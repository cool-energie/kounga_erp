using kounga_erp.api.Domain.Abstractions;

namespace kounga_erp.api.Domain.Models;

public class Claim : Entity<long>
{
    public string Name { get; set; }
}
