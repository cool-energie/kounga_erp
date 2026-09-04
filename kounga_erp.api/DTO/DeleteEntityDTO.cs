namespace kounga_erp.api.DTO;

public record DeleteEntityDTO(long id);

public class DeleteEntityDTOValidator : AbstractValidator<DeleteEntityDTO>
{
    public DeleteEntityDTOValidator()
    {
        RuleFor(x => x.id).NotEmpty().WithMessage("Id is required");
    }
}