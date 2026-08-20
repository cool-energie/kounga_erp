using kounga_erp.api.Application.Models;

namespace kounga_erp.api.Application.Services;

public interface ISecurityService
{
    List<User> getUsersPage(PagedDataRequest request);
}
