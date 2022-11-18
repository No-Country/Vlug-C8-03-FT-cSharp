using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class AirsCompany
{
    public int IdAirCompany { get; set; }

    public string NameComp { get; set; }

    public string LogoUrl { get; set; }

    public virtual ICollection<Flight> Flights { get; } = new List<Flight>();
}
