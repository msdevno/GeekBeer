using Microsoft.AspNet.SignalR;

namespace Web
{
	public class TestHub : Hub
	{
		
		
		public void Hello(string input)
		{
			Clients.All.hello(input + " from the server");
		}
	}
}