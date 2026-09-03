using System.Security.AccessControl;

namespace kounga_erp.api.BuildingBlocks.Helpers;

public readonly struct StringDateTime
{
    public DateTime Value { get; }

    public StringDateTime(DateTime value)
    {
        Value = value;
    }

    public static implicit operator StringDateTime(string dateString)
    {
        DateTime parsed = DateTime.Parse(dateString);
        return new StringDateTime(parsed);
    }

    public static implicit operator DateTime(StringDateTime date) => date.Value;
}
