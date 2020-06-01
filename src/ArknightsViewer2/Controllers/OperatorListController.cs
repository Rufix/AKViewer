using ArknightsViewer.Common.DTO;
using ArknightsViewer.Common.Requests;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ArknightsViewer2.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class OperatorListController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OperatorListController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<IEnumerable<OperatorListItem>> Get()
        {
            return await _mediator.Send(new OperatorListRequest());
        }
    }
}