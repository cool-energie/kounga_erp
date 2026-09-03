namespace kounga_erp.api.DTO;

public record CreateUserDTO(long? Id, string Email, string Password, string FirstName, string LastName, string DateOfBirth, string PhoneNumber, Boolean IsActive);

public class CreateUserDTOValidator : AbstractValidator<CreateUserDTO>
{
    public CreateUserDTOValidator()
    {
        RuleFor(x => x.Email).NotEmpty().WithMessage("Email is required");
        RuleFor(x => x.Password).NotEmpty().WithMessage("Password is required");
        RuleFor(x => x.FirstName).NotEmpty().WithMessage("First name is required");
        RuleFor(x => x.DateOfBirth).NotEmpty().WithMessage("Date of birth is required");
    }
}