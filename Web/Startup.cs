using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.Configuration;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;
using Microsoft.Framework.Runtime;

namespace Web
{
    public class Startup
    {
        // This method gets called by the runtime.
        public void ConfigureServices(IServiceCollection services)
        {
            
            services.AddSignalR();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // Add static files to the request pipeline.
            app.UseStaticFiles();
            
            app.UseSignalR();

        }
    }
}
