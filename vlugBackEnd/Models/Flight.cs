using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class Flight
{
    public int IdFlight { get; set; }

    public int IdAirCompany { get; set; }

    public string Shipflight { get; set; }

    public string Code { get; set; }

    public virtual ICollection<FlightsTicket> FlightsTickets { get; } = new List<FlightsTicket>();

    public virtual AirsCompany IdAirCompanyNavigation { get; set; }
}
