using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class Contact
{
    public int IdContact { get; set; }

    public string Email { get; set; }

    public string FullName { get; set; }

    public int IdUser { get; set; }

    public virtual User IdUserNavigation { get; set; }
}
