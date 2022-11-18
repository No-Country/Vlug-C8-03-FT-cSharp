using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class AirPortCityCountryCode
{
    public int Id { get; set; }

    public string City { get; set; }

    public string Country { get; set; }

    public string Code { get; set; }
}
