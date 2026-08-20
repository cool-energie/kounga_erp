namespace kounga_erp.api.Application.Models;

public struct PagedDataRequest : IPagedDataRequest
{
    public int page { get; set; }
    public int itemsPerPage { get; set; }
}
