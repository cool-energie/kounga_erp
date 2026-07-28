using kounga_erp.api.Domain.Abstractions;

namespace kounga_erp.api.Domain.Models;
public class User : Entity<long>
{
    public string username {  get; set; }
    public string password {  get; set; }
    public IEnumerable<Role> roles { get; set; }
}