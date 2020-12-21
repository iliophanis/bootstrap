namespace Application.Common.Models
{
    public class PageParameters
    {
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
        public string SortBy { get; set; }
        public bool IsAscend { get; set; }
        public string Age { get; set; } = "";
        public string Size { get; set; } = "";
        public string Specie { get; set; } = "";
        public string Filter { get; set; } = "";

    }
}