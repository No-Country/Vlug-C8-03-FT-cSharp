using System;
using System.Collections.Generic;

namespace vlugBackEnd.Models;

public partial class Contact
{
    public int IdContact { get; set; }

    public string Email { get; set; } = null!;

    public string FullName { get; set; } = null!;

    public int IdUser { get; set; }

    public virtual User IdUserNavigation { get; set; } = null!;
}
