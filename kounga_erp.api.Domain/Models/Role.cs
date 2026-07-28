using kounga_erp.api.Domain.Abstractions;
using System.Collections;

namespace kounga_erp.api.Domain.Models;

public class Role : Entity<long>
{
    public string name { get; set; }
    public IEnumerable<Claim> claims { get; set; }
}
