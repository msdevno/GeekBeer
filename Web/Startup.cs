using System;
using System.Linq;
using Bifrost.Configuration;
using Bifrost.Configuration.Assemblies;
using Infrastructure.Execution;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.DependencyInjection.Ninject;
using Microsoft.Framework.Logging;
using Web.Configuration;
using Ninject;

namespace Web
{
    public class Startup
    {
        // This method gets called by the runtime.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            Bifrost.Configuration.Configure.DiscoverAndConfigure(
                assembliesConfigurationBuilderCallback: builder => builder.IncludeAll().ExceptAssembliesStartingWith("Microsoft"),
                additionalAssemblyProviders: new[] { new LibraryAssemblyProvider() }
            );
                        
            services.AddSignalR();
            
            ContainerCreator.Kernel.Populate(services.Where(s => !s.HasBinding()));
            return ContainerCreator.Kernel.Get<IServiceProvider>();            
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            // Add static files to the request pipeline.
            app.UseStaticFiles();
            
            app.UseSignalR();

        }
    }
    
    public static class ServiceDescriptorExtensions
    {
        public static bool HasBinding(this ServiceDescriptor descriptor)
        {
            return Configure.Instance.Container.HasBindingFor(descriptor.ServiceType);
        }
    }    
}
