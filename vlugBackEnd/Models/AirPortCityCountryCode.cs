using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class AirPortCityCountryCode
{
    public int Id { get; set; }

    public string City { get; set; } = null!;

    public string Country { get; set; } = null!;

    public string Code { get; set; } = null!;
}
