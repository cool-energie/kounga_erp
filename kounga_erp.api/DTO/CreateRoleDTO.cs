namespace kounga_erp.api.DTO;

public record CreateRoleDTO(string Name, string? Description, Boolean IsActive);

public class CreateRoleDTOValidator : AbstractValidator<CreateRoleDTO>
{
    public CreateRoleDTOValidator() { 
        RuleFor(x => x.Name).NotEmpty().WithMessage("Role name is required");
        RuleFor(x => x.IsActive).NotEmpty().WithMessage("IsActive is required");
    }
}
