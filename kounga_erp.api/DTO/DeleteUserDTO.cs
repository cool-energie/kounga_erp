namespace kounga_erp.api.DTO;

public record DeleteUserDTO(long id);

public class DeleteUserDTOValidator : AbstractValidator<DeleteUserDTO>
{
    public DeleteUserDTOValidator()
    {
        RuleFor(x => x.id).NotEmpty().WithMessage("Id is required");
    }
}