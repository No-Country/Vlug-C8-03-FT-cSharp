using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class UsersProfile
{
    public int IdUseProfile { get; set; }

    public string NameRole { get; set; }

    public virtual ICollection<User> Users { get; } = new List<User>();
}
