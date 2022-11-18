using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class User
{
    public int IdUser { get; set; }

    public string Email { get; set; }

    public string Password { get; set; }

    public string Salt { get; set; }

    public string FullName { get; set; }

    public string ImgUrl { get; set; }

    public string Status { get; set; }

    public int IdProfile { get; set; }

    public virtual ICollection<Booking> Bookings { get; } = new List<Booking>();

    public virtual ICollection<Contact> Contacts { get; } = new List<Contact>();

    public virtual UsersProfile IdProfileNavigation { get; set; }
}
