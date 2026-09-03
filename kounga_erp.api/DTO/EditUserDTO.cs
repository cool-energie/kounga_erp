using kounga_erp.api.BuildingBlocks.Helpers;

namespace kounga_erp.api.DTO;

public record EditUserDTO(long Id, string Email, string FirstName, string LastName, DateTime DateOfBirth, string PhoneNumber, Boolean IsActive);

public class EditUserDTOValidator : AbstractValidator<EditUserDTO>
{
    public EditUserDTOValidator()
    {
        RuleFor(x => x.Id).NotEmpty().WithMessage("Id is required");
        RuleFor(x => x.Email).NotEmpty().WithMessage("Email is required");
        RuleFor(x => x.FirstName).NotEmpty().WithMessage("First name is required");
        RuleFor(x => x.DateOfBirth).NotEmpty().WithMessage("Date of birth is required");
    }
}