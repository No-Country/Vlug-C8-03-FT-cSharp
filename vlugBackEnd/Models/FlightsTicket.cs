using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class FlightsTicket
{
    public int IdFlightTicket { get; set; }

    public string TicketCode { get; set; }

    public int IdFlight { get; set; }

    public TimeSpan BoardingTime { get; set; }

    public string Gate { get; set; }

    public string Seat { get; set; }

    public string PassengerName { get; set; }

    public string Class { get; set; }

    public string Departure { get; set; }

    public string Arrival { get; set; }

    public DateTime DateFligh { get; set; }

    public decimal Mount { get; set; }

    public string Status { get; set; }

    public virtual ICollection<Booking> Bookings { get; } = new List<Booking>();

    public virtual Flight IdFlightNavigation { get; set; }
}
