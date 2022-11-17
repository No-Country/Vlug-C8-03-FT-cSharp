using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class User
{
    public int IdUser { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Salt { get; set; } = null!;

    public string FullName { get; set; } = null!;

    public string ImgUrl { get; set; } = null!;

    public string Status { get; set; } = null!;

    public int IdProfile { get; set; }

    public virtual ICollection<Booking> Bookings { get; } = new List<Booking>();

    public virtual ICollection<Contact> Contacts { get; } = new List<Contact>();

    public virtual Profile IdProfileNavigation { get; set; } = null!;
}
