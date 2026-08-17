
namespace kounga_erp.api.Application.Templates.Models;

public class RegistrationConfirmationEmailModel 
{
    public string firstName {  get; set; } = string.Empty;
    public string confirmationLink { get; set; } = string.Empty;
}

