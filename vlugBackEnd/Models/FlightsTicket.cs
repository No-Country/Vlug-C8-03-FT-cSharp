using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class FlightsTicket
{
    public int IdFlightTicket { get; set; }

    public string TicketCode { get; set; } = null!;

    public int IdFlight { get; set; }

    public TimeSpan BoardingTime { get; set; }

    public string Gate { get; set; } = null!;

    public string Seat { get; set; } = null!;

    public string PassengerName { get; set; } = null!;

    public string Class { get; set; } = null!;

    public string Departure { get; set; } = null!;

    public string Arrival { get; set; } = null!;

    public DateTime DateFligh { get; set; }

    public decimal Mount { get; set; }

    public string Status { get; set; } = null!;

    public virtual ICollection<Booking> Bookings { get; } = new List<Booking>();

    public virtual Flight IdFlightNavigation { get; set; } = null!;
}
