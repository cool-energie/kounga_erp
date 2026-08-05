namespace kounga_erp.api.Application.Services;

public interface IEmailService
{
    Task SendRegistrationConfirmationEmail(string toEmail, string firstName, string confirmationLink);
    Task SendAccountCreatedEmail(string toEmail, string firstName, string loginLink);
    Task SendResendConfirmationEmailAsync(string toEmail, string firstName, string confirmationLink);
}
