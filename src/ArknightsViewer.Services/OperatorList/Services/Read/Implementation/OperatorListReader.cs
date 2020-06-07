using ArknightsViewer.Common.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArknightsViewer.Services.OperatorList.Services.Read.Implementation
{
    public class OperatorListReader : IOperatorListReader
    {
        public Task<IEnumerable<OperatorListItem>> GetListItems()
        {
            var names = new string[]
            { 
                "Amiya", "FEater", "Gavial", "Gitano", "Glaucus", "Grani", "Hoshiguma", "Ifrit", "Lappland", 
                "Liskarm", "Meteor", "Nearl", "Nightingale", "Platinum", "Plume", "Project Red", "Pramanix", 
                "Ptilopsis", "Savage", "Shirayuki", "Silence", "Skadi", "Specter", "Texas", "Zima" 
            };
            var result = names.Select(z => new OperatorListItem
            {
                Name = z,
                BasicInfo = new OperatorBasicInfo()
            });
            return Task.FromResult(result);
        }
    }
}
