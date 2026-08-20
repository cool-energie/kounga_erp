using FluentValidation;

namespace kounga_erp.api.DTO;

public record ConfirmEmailDTO(long userId, string token);

public class ConfirmEmailDTOValidator : AbstractValidator<ConfirmEmailDTO>
{
    public ConfirmEmailDTOValidator()
    {
        RuleFor(x => x.userId).NotEmpty().WithMessage("UserId is required");
        RuleFor(x => x.userId).GreaterThan(0).WithMessage("Invalid userId");
        RuleFor(x => x.token).NotEmpty().WithMessage("Token is required");
        //RuleFor(x => x.dateOfBirth).NotEmpty().WithMessage("Date of birth is required");
    }
}