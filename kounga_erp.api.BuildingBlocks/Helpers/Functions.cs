using System.Globalization;

namespace kounga_erp.api.BuildingBlocks.Helpers;

public static class Functions
{
    public static DateTime GetDate(string dateStr)
    {
        return DateTime.ParseExact(dateStr, "dd/MM/yyyy", CultureInfo.InvariantCulture);
    }
}
