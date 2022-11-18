using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class Booking
{
    public int IdBooking { get; set; }

    public int IdUser { get; set; }

    public DateTime DateBooking { get; set; }

    public int IdFlightTicket { get; set; }

    public decimal MountReward { get; set; }

    public string Status { get; set; }

    public virtual FlightsTicket IdFlightTicketNavigation { get; set; }

    public virtual User IdUserNavigation { get; set; }
}
