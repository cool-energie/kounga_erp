using System.Globalization;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace kounga_erp.api.BuildingBlocks.Converters;

public class CustomDateTimeConverter : JsonConverter<DateTime>
{
    private readonly string[] _formats =
    {
        "dd/MM/yyyy",
        "yyyy-MM-dd HH:mm:ss",
        "yyyy-MM-ddTHH:mm:ss"
    };

    public override DateTime Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        string? dateString = reader.GetString();
        if (dateString is null) return default;
        foreach (var format in _formats)
        {
            if (DateTime.TryParseExact(dateString, format, CultureInfo.InvariantCulture,
                                       DateTimeStyles.None, out var date))
            {
                return date;
            }
        }

        // fallback si rien ne correspond
        return DateTime.Parse(dateString, CultureInfo.InvariantCulture);
    }

    public override void Write(Utf8JsonWriter writer, DateTime value, JsonSerializerOptions options)
    {
        writer.WriteStringValue(value.ToString(_formats[0]));
    }
}
