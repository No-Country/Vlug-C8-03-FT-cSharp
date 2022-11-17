using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class Profile
{
    public int IdProfile { get; set; }

    public string NameRole { get; set; } = null!;

    public virtual ICollection<User> Users { get; } = new List<User>();
}
