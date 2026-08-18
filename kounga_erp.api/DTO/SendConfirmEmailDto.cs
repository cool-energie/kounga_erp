using FluentValidation;

namespace kounga_erp.api.DTO;

public record SendConfirmEmailDto(string email);

public class SendConfirmEmailValidator : AbstractValidator<SendConfirmEmailDto>
{
    public SendConfirmEmailValidator()
    {
        RuleFor(x => x.email).NotEmpty().WithMessage("Email is required");
    }
}
