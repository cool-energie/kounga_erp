using kounga_erp.api.Domain.Abstractions;

namespace kounga_erp.api.Application.Models;

public struct PagedDataResult<T>
{
    public List<T> Items { get; set; }
    public int Total { get; set; }

    public PagedDataResult(List<T> items, int total)
    {
        Items = items;
        Total = total;
    }
}
