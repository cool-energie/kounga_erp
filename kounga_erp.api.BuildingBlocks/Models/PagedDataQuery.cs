using FluentValidation;

namespace kounga_erp.api.BuildingBlocks.Models;

public class PagedDataQuery
{
    public int page { get; set; }
    public int itemsPerPage { get; set; }
    public string? sorts { get; set; }
    public string? filters { get; set; }

    public List<SortQuery> getSortsList()
    {
        List<SortQuery> list = new List<SortQuery>();
        if (sorts == null) return list;
        string[] cols = sorts.Split(",");
        foreach (var c in cols)
        {
            if (c.StartsWith("-")) list.Add(new SortQuery(c.Substring(1), "desc"));
            else list.Add(new SortQuery(c, "asc"));
        }

        return list;
    }

    public List<FilterQuery> getFiltersList()
    {
        List<FilterQuery> list = new List<FilterQuery>();
        if (filters == null) return list;
        string[] cols = filters.Split("~");
        string[] rows;
        foreach (var c in cols)
        {
            rows = c.Split("::");
            list.Add(new FilterQuery(rows[0], rows[1], rows[2]));
        }

        return list;
    }
}

public class PagedDataQueryValidator : AbstractValidator<PagedDataQuery> {
    public PagedDataQueryValidator() {
        RuleFor(x => x.page).NotEmpty().WithMessage("page is required");
        RuleFor(x => x.itemsPerPage).NotEmpty().WithMessage("itemsPerPage is required");
    }
}