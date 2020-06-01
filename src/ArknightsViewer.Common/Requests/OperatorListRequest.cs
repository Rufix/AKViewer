using ArknightsViewer.Common.DTO;
using MediatR;
using System.Collections.Generic;

namespace ArknightsViewer.Common.Requests
{
    public class OperatorListRequest : IRequest<IEnumerable<OperatorListItem>> { }
}
