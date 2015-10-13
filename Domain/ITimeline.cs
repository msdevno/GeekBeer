using System.Collections.Generic;

namespace Domain
{
	public interface ITimeline
	{
		IEnumerable<Entry> Get();
		void Add(Entry entry);
	}
}