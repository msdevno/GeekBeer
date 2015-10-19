using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Bifrost.Execution;
using Bifrost.Serialization;
using Microsoft.Framework.Logging;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;

namespace Domain
{
    [Singleton]
    public class Timeline : ITimeline
    {
        const string account = "<storage access key name>";
        const string primaryAccessKey = "<storage access key>";

        const string serviceBusConnectionString = "<serviceBus ConnectionString>";


        const string activityEventHubAccessKeyName = "RootManageSharedAccessKey"; // Name of access key name
        const string activityEventHubAccessKey = "<ServiceBus Access Key>";
        const string activityEventHub = "https://{namespace}.servicebus.windows.net/{partition}/{eventhub}";

        const string activitySender = "<>";

        CloudTable _table;

        ISerializer _serializer;

        ILogger _logger;

        public Timeline(ISerializer serializer, ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger(typeof(Timeline).Name);
            _logger.LogInformation("Timeline");
            _serializer = serializer;

            var connectionString = $"DefaultEndpointsProtocol=https;AccountName={account};AccountKey={primaryAccessKey}";

            _logger.LogInformation("Create storage account");
            var storageAccount = CloudStorageAccount.Parse(connectionString);
            _logger.LogInformation("Create table client");
            var tableClient = storageAccount.CreateCloudTableClient();

            _logger.LogInformation("Create table if not exists");
            _table = tableClient.GetTableReference("Timeline");
            _table.CreateIfNotExists();

            _logger.LogInformation("Created");
        }

        public IEnumerable<Entry> Get()
        {
            var query = new TableQuery<Entry>();
            var entries = _table.ExecuteQuery(query).ToArray().OrderByDescending(e => e.Time);
            return entries;
        }


        public void Add(Entry entry)
        {
            //var entry = new Entry();
            try
            {
                _logger.LogInformation("Adding entry");
                entry.PartitionKey = Guid.NewGuid().ToString();
                entry.RowKey = Guid.NewGuid().ToString();
                _logger.LogInformation("Create operation");
                var operation = TableOperation.Insert(entry);
                _logger.LogInformation("Execute");
                _table.Execute(operation);

                _logger.LogInformation("Entry added");


                SendEntry(entry).Wait();
            }
            catch (Exception ex)
            {
                _logger.LogError("Problem adding entry", ex);
            }
        }

        string GetSasToken(string uri, string keyName, string key)
        {
            var expiry = DateTime.UtcNow.AddHours(24);
            return "";
        }


        // https://blogs.endjin.com/2015/02/send-data-into-azure-event-hubs-using-web-apis-httpclient/
        async Task SendEntry(Entry entry)
        {
            _logger.LogInformation("SendEntry");
            var json = _serializer.ToJson(entry);

            // Generate the shared access SAS URL with the tool from the link above
            var sas = "SharedAccessSignature sr=https%3a%2f%2f{namespace}.servicebus.windows.net%2factivity%2fpublishers%2f{partition}%2f{eventhub}s&sig={key}&skn={name of key}";

            // Namespace info.
            var serviceNamespace = "geekbeer";
            var hubName = "activity";
            var url = string.Format("{0}/publishers/{partition}/{eventhub}", hubName);
            
            _logger.LogInformation("Create client");
            var httpClient = new HttpClient
            {
                BaseAddress = new Uri(string.Format("https://{0}.servicebus.windows.net/", serviceNamespace))
            };

            _logger.LogInformation("Add authorization");
            httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Authorization", sas);
            
            
            _logger.LogInformation("Create content");
            var content = new StringContent(json, Encoding.UTF8, "application/json");

            var contentType = "application/atom+xml;type=entry;charset=utf-8";
            
            _logger.LogInformation("Adding content type");
            
            content.Headers.Add("ContentType", contentType);
            
            _logger.LogInformation("Posting");
            var response = await httpClient.PostAsync(url, content);
            
            _logger.LogInformation("Posted");
            var result = await response.Content.ReadAsStringAsync();

            _logger.LogInformation("Response status : "+response.StatusCode);
            _logger.LogInformation("Entry has been sent : " + result);
        }
    }
}
