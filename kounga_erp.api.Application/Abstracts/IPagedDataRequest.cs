namespace kounga_erp.api.Application.Abstracts;

public interface IPagedDataRequest
{
    public int page { get; set; }
    public int itemsPerPage { get; set; }
}
