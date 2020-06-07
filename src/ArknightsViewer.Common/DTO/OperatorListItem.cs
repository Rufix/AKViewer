namespace ArknightsViewer.Common.DTO
{
    public class OperatorListItem
    {
        public string Name { get; set; }
        public OperatorBasicInfo BasicInfo { get; set; }
        public string MiniatureUrl => "https://gamepress.gg/arknights/sites/arknights/files/game-images/avatars/char_002_amiya_1.png";
    }
}
