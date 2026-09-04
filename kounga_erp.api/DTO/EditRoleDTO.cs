namespace kounga_erp.api.DTO;

public record EditRoleDTO(long Id, string Name, string? Description, Boolean IsActive);

public class EditRoleDTOValidator : AbstractValidator<EditRoleDTO>
{
    public EditRoleDTOValidator()
    {
        RuleFor(x => x.Id).NotEmpty().WithMessage("Role Id is required");
        RuleFor(x => x.Name).NotEmpty().WithMessage("Role name is required");
    }
}