namespace kounga_erp.api.Domain.Abstractions;

internal interface IEntity<T> : IEntity
{
    public T Id { get; set; }
}

internal interface IEntity
{
    public DateTime? CreatedAt { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime? LastModified { get; set; }
    public string? LastModifiedBy { get; set; }
}
