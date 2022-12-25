using Microsoft.AspNetCore.Mvc;

namespace Uplift.Web.Areas.Admin.Controllers
{
    public class FrequencyController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}