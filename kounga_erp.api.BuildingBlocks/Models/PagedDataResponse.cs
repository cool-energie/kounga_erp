namespace kounga_erp.api.BuildingBlocks.Models;

public struct PagedDataResponse<T>
{
    public T[] Items { get; set; }
    public int Total { get; set; }

    public PagedDataResponse(T[] items, int total)
    {
        Items = items;
        Total = total;
    }
}
