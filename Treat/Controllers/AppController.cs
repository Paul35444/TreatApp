using Microsoft.AspNetCore.Mvc;

namespace Treat.Controllers
{
    public class AppController : Controller
    {
        public IActionResult Index()
        {

            return View();
        }
    }
}
