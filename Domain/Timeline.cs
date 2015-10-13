using System;
using System.Collections.Generic;
using System.Linq;
using Bifrost.Execution;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace Domain
{
	[Singleton]
    public class Timeline : ITimeline
	{
		const string account = "geekbeer";
		const string primaryAccessKey = "114xdwbWIicO6q32Hd2X2ET1Hb1Q/cHmItQaJmjrUP9H1B45lqG8DIL3di+QYc/FL8beb8JiN1sQ//1AlpsEpQ==";
		
		CloudTable _table;
				
		public Timeline()
		{
			var connectionString = $"DefaultEndpointsProtocol=https;AccountName={account};AccountKey={primaryAccessKey}";
			var storageAccount = CloudStorageAccount.Parse(connectionString);
			var tableClient = storageAccount.CreateCloudTableClient();
			_table = tableClient.GetTableReference("Timeline");
			_table.CreateIfNotExists();			
		}
		
		public IEnumerable<Entry> Get()
		{
			var query = new TableQuery<Entry>();
			var entries = _table.ExecuteQuery(query).ToArray().OrderByDescending(e=>e.Time);
			return entries;
		}
			
		
		public void Add(Entry entry)
		{
			//var entry = new Entry();
			entry.PartitionKey = Guid.NewGuid().ToString();
			entry.RowKey = Guid.NewGuid().ToString();
			var operation = TableOperation.Insert(entry);
			_table.Execute(operation);
		
		}
		
	}
}