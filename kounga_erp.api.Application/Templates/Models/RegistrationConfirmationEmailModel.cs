using Microsoft.AspNetCore.Mvc.RazorPages;

namespace kounga_erp.api.Application.Templates.Models;

public class RegistrationConfirmationEmailModel : PageModel
{
    public string firstName {  get; set; } = string.Empty;
    public string confirmationLink { get; set; } = string.Empty;
}

