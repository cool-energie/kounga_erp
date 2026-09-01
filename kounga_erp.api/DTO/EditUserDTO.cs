namespace kounga_erp.api.DTO;

public record EditUserDTO(long? id, string email, string password, string firstName, string lastName, string dateOfBirth, string phoneNumber, Boolean isActive);

public class EditUserDTOValidator : AbstractValidator<EditUserDTO>
{
    public EditUserDTOValidator()
    {
        RuleFor(x => x.email).NotEmpty().WithMessage("Email is required");
        RuleFor(x => x.password).NotEmpty().When(x => x.id == null).WithMessage("Password is required");
        RuleFor(x => x.firstName).NotEmpty().WithMessage("First name is required");
        //RuleFor(x => x.dateOfBirth).NotEmpty().WithMessage("Date of birth is required");
    }
}