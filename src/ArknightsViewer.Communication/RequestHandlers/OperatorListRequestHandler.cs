using ArknightsViewer.Common.DTO;
using ArknightsViewer.Common.Requests;
using ArknightsViewer.Services.OperatorList.Services.Read;
using MediatR;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace ArknightsViewer.Communication.RequestHandlers
{
    public class OperatorListRequestHandler : IRequestHandler<OperatorListRequest, IEnumerable<OperatorListItem>>
    {
        private readonly IOperatorListReader _operatorListService;

        public OperatorListRequestHandler(IOperatorListReader operatorListReader)
        {
            _operatorListService = operatorListReader;
        }

        public async Task<IEnumerable<OperatorListItem>> Handle(OperatorListRequest request, CancellationToken cancellationToken)
        {
            return await _operatorListService.GetListItems();
        }
    }
}
