using ArknightsViewer.Common.DTO;
using ArknightsViewer.Common.Enums;
using System;
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
            var result = names.Select(z =>
            {
                var rng = new Random();
                return new OperatorListItem
                {
                    Name = z,
                    BasicInfo = new OperatorBasicInfo()
                    {
                        DamageType = rng.Next(0, (int)DamageType.True),
                        Rarity = rng.Next(0, 6),
                        Targets = rng.Next(0, (int)TargettingType.Aoe),
                        Type = rng.Next(0, (int)OperatorType.Vanguard)
                    }
                };
            });
            return Task.FromResult(result);
        }
    }
}
