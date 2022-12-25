using Microsoft.AspNetCore.Mvc;
using Uplift.DataAccess.Data.Repository.IRepository;

namespace Uplift.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CategoryController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;

        public CategoryController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IActionResult Index()
        {
            return View();
        }

        #region API CALLS

        [HttpGet]
        public IActionResult GetAll()
        {
            return Json(new { data = _unitOfWork.CategoryRepository.GetAll() });
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var objFromDb = _unitOfWork.CategoryRepository.Get(id);

            if (objFromDb == null)
            {
                return Json(new { success = false, message = "Error while deleting." });
            }
            
            _unitOfWork.CategoryRepository.Remove(objFromDb);
            _unitOfWork.Save();
            return Json(new { success = true, message = "Deleted successfully" });
        }

        #endregion
    }
}
