using System;
using System.Collections.Generic;
using Domain;
using Microsoft.AspNet.SignalR;

namespace Web
{
	
	public class TimelineHub : Hub
	{
		ITimeline _timeline;
		
		public TimelineHub(ITimeline timeline)
		{
			_timeline = timeline;
		}
		
		public IEnumerable<Entry> GetAll()
		{
			return _timeline.Get();
		}
		
		public void CheckIn(string beerName, string image)
		{
			var entry = new Entry(DateTime.UtcNow, Guid.NewGuid())
			{
				BeerName = beerName,
				ImageName = image	
			};
			_timeline.Add(entry);
			
			Clients.All.entryAdded(entry);
		}
	}
}