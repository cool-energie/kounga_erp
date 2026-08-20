namespace kounga_erp.api.Domain.Abstractions;

public interface IEntity : IEntity<long>
{
}

public interface IEntity<T>
{
    public T Id { get; set; }
    public DateTime? CreatedAt { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? LastModified { get; set; }
    public string? LastModifiedBy { get; set; }
}
