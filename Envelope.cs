using System.Collections.Generic;

namespace Domain.Common
{
    public class Envelope<T>
    {
        public List<T> Items { get; set; }
        public double TotalSize { get; set; }
    }
}