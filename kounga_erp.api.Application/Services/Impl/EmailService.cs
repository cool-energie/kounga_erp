using MailKit.Net.Smtp;
using Microsoft.Extensions.Configuration;
using MimeKit;

namespace kounga_erp.api.Application.Services.Impl;

internal class EmailService(IConfiguration configuration) : IEmailService
{

    public Task SendAccountCreatedEmail(string toEmail, string firstName, string loginLink)
    {
        throw new NotImplementedException();
    }

    public async Task SendRegistrationConfirmationEmail(string toEmail, string firstName, string confirmationLink)
    {
        string html = $"""            
            <div class="bg-body-tertiary p-3 rounded">
                <h1>Verify Your Email Address</h1>
                <p>Dear {firstName},</p>
                <p>Thank you for registering with our service. Please verify your email address by clicking the link below:</p>
                <p><a href="{confirmationLink}">Verify Email Address</a></p>
                <p>If you did not create an account, no further action is required.</p>
                <p>Best regards,<br/>The Kounga ERP Team</p>
            </div>
            """;

        await SendEmailAsync(toEmail, firstName, "Confirm your email address", html, isHtmlBody: true);
    }

    public Task SendResendConfirmationEmailAsync(string toEmail, string firstName, string confirmationLink)
    {
        throw new NotImplementedException();
    }

    private async Task SendEmailAsync(string toEmail, string toName, string subject, string body, bool isHtmlBody = false)
    {
        try
        {
            //var smtpServer = _configuration["EmailSettings:SmtpServer"];
            //var smtpPort = int.Parse(_configuration["EmailSettings:SmtpPort"] ?? "587");
            var senderEmail = configuration["EmailSettings:SenderEmail"];
            var senderName = configuration["EmailSettings:SenderName"];
            var password = configuration["EmailSettings:Password"];

            var message = new MimeMessage();

            var from = new MailboxAddress(senderName, senderEmail!);
            var to = new MailboxAddress(toName, toEmail);

            message.From.Add(from);
            message.To.Add(to);
            message.Subject = subject;
            if(isHtmlBody)
            {
                var builder = new BodyBuilder();
                builder.HtmlBody = 
                    $"""
                        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
                        {body}
                    """;
                message.Body = builder.ToMessageBody();
            } else
            {
                message.Body = new TextPart(body);
            }

            using var smtp = new SmtpClient();
            await smtp.ConnectAsync("localhost", 1025);
            await smtp.SendAsync(message);
            await smtp.DisconnectAsync(true);
        }
        catch (Exception ex)
        {
            throw new InvalidOperationException("Failed to send email.", ex);
        }
    }
}
