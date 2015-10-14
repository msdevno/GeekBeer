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
using Microsoft.Framework.Logging.Console;

namespace Web
{
    public class Startup
    {
        // This method gets called by the runtime.
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            //var logger = loggerFactory.CreateLogger(typeof(Program).FullName);
            
            //logger.LogInformation("Handled in {ExecutionTime} ms", executionTime);
            
                        
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
            
            loggerFactory.AddConsole(minLevel: LogLevel.Information);
            
            var logger = loggerFactory.CreateLogger(typeof(Startup).Name);
            logger.LogInformation("Starting");
            
            
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
