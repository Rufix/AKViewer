using ArknightsViewer.Common.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ArknightsViewer.Services.OperatorList.Services.Read
{
    public interface IOperatorListReader
    {
        Task<IEnumerable<OperatorListItem>> GetListItems();
    }
}
