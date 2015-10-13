using System;
using Microsoft.WindowsAzure.Storage.Table;

namespace Domain
{
	public class Entry : TableEntity
	{
		public Entry() {}
		public Entry(DateTime time, Guid id)
		{
			PartitionKey = time.ToShortDateString();
			RowKey = id.ToString();
			
			Time = time;
		}
		
		public DateTime Time { get; set;}
		
		public string BeerName { get; set; }
		
		public string ImageName { get; set; }
		
		public int Rating { get; set; }
		
		public bool Cheers { get; set; }
	}
}