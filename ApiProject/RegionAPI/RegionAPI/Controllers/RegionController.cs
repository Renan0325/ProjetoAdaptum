using Microsoft.AspNetCore.Mvc;
using RegionAPI.Model;
using RegionAPI.Service;
using RegionAPI.ViewModels;

namespace RegionAPI.Controllers
{
    [ApiController]
    [Route("api/Region")]
    public class RegionController : Controller
    {
        private readonly RegionService _regionService;

        public RegionController(RegionService regionService) {
            _regionService = regionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetRegionsList()
        {
            return Ok(await _regionService.ListRegion());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetRegionById(int id)
        {
            return Ok(await _regionService.GetByIdRegion(id));
        }


        [HttpPost]
        public async Task<IActionResult> Post(RegionInputModel region)
        {
            var (sucesso, erro) = await _regionService.CreatedRegion(region);
            return sucesso ? Ok(region) : Conflict(erro);
        }

        [HttpPut]
        public async Task<IActionResult> Put(RegionInputModel regiao)
        {
            var (sucesso, erro) = await _regionService.UpdatedRegion(regiao);
            return sucesso ? NoContent() : Conflict(erro);
        }

        [HttpPatch("{id}/Inactivate")]
        public async Task<IActionResult> Inactivate(int id)
        {
          return  await _regionService.InactivateRegion(id) ? NoContent() : NotFound();
        }

        [HttpPatch("{id}/ativar")]
        public async Task<IActionResult> Ativar(int id)
        {
           return  await _regionService.ActiveRegion(id) ? NoContent() : NotFound();
        }
    }
}
