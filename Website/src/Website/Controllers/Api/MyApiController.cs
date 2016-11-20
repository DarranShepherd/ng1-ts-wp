using DotNetLibrary;
using Microsoft.AspNetCore.Mvc;

namespace Website.Controllers.Api
{
    [Route("api/[controller]")]
    public class MyApiController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            var library = new LibraryService();
            return Ok(new
            {
                ControllerMessage = "Controller Message",
                LibraryMessage = library.Message
            });
        }
    }
}
