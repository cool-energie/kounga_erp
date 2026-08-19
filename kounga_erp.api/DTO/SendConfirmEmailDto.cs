namespace kounga_erp.api.DTO;

public record SendConfirmEmailDTO(string email);

public class SendConfirmEmailValidator : AbstractValidator<SendConfirmEmailDTO>
{
    public SendConfirmEmailValidator()
    {
        RuleFor(x => x.email).NotEmpty().WithMessage("Email is required");
    }
}
