using System.Globalization;

namespace kounga_erp.api.BuildingBlocks.Helpers;

public static class Functions
{
    public static DateTime GetDate(string dateStr)
    {
        return DateTime.ParseExact(dateStr, "dd/MM/yyyy", CultureInfo.InvariantCulture);
    }

    public static void ObjectAssign<T, S>(T target, S source)
    {
        if (target == null || source == null) return;

        var sourceType = source.GetType();
        var targetType = target.GetType();

        foreach (var sourceProp in sourceType.GetProperties())
        {
            // Find matching property name in target
            var targetProp = targetType.GetProperty(sourceProp.Name);

            if (targetProp != null && targetProp.CanWrite && sourceProp.CanRead)
            {
                var value = sourceProp.GetValue(source);
                targetProp.SetValue(target, value);
            }
        }
    }
}
