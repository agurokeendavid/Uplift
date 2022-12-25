using Microsoft.AspNetCore.Mvc;

namespace Uplift.Web.Areas.Admin.Controllers
{
    public class ServiceController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}