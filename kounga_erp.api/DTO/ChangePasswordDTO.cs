namespace kounga_erp.api.DTO;

public record ChangePasswordDTO(long userId, string newPassword);

public class ChangePasswordDTOValidator : AbstractValidator<ChangePasswordDTO>
{
    public ChangePasswordDTOValidator()
    {
        RuleFor(x => x.userId).NotEmpty().WithMessage("User ID is required");
        RuleFor(x => x.newPassword).NotEmpty().WithMessage("New password is required");
    }
}