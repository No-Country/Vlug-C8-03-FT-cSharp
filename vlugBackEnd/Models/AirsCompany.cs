using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class AirsCompany
{
    public int IdAirCompany { get; set; }

    public string NameComp { get; set; } = null!;

    public string LogoUrl { get; set; } = null!;

    public string WebPage { get; set; } = null!;

    public string Status { get; set; } = null!;

    public virtual ICollection<Flight> Flights { get; } = new List<Flight>();
}
