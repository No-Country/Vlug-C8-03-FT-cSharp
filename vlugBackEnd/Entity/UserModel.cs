using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace vlugBackEnd.Entity
{
    public class UserModel
    {
        public int IdUser { get; set; }
        [Required(ErrorMessage = "field {0} required")]
        [EmailAddress(ErrorMessage = "invalid mail format")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "field {0} required")]
        public string? Password { get; set; }
        [Required(ErrorMessage = "field {0} required")]
        public string? FullName { get; set; }
        

    }
}
