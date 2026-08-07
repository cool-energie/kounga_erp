using FluentValidation;
namespace kounga_erp.api.DTO;

public record RegisterUserDto(string email, string password, string firstName,  string lastName, string dateOfBirth, string phoneNumber);

public class RegisterUserDtoValidator : AbstractValidator<RegisterUserDto>
{
    public RegisterUserDtoValidator()
    {
        RuleFor(x => x.email).NotEmpty().WithMessage("Email is required");
        RuleFor(x => x.password).NotEmpty().WithMessage("Password is required");
        RuleFor(x => x.firstName).NotEmpty().WithMessage("First name is required");
        //RuleFor(x => x.dateOfBirth).NotEmpty().WithMessage("Date of birth is required");
    }
}