using kounga_erp.api.Application.Abstracts;

namespace kounga_erp.api.DTO;

public class PagedDataRequestDTO : IPagedDataRequest
{
    public int page { get; set; }
    public int itemsPerPage { get; set; }
}