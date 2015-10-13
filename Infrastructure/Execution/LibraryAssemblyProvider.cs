using System.Collections.Generic;
using System.Reflection;
using System.Runtime.InteropServices;
using Bifrost.Execution;
using Microsoft.Framework.Runtime;
using Microsoft.Framework.Runtime.Infrastructure;

namespace Infrastructure.Execution
{
    public class LibraryAssemblyProvider : ICanProvideAssemblies
    {

        public LibraryAssemblyProvider()
        {
            var libraryManager = CallContextServiceLocator.Locator.ServiceProvider.GetService(typeof(ILibraryManager)) as LibraryManager;
            var libraries = libraryManager.GetLibraries();

            var assemblies = new List<LibraryAssemblyInfo>();
            foreach (var library in libraries)
            {
                foreach (var assemblyName in library.LoadableAssemblies)
                {
                    try
                    {
                        if (assemblyName.Name.StartsWith("System") || 
                            assemblyName.Name.StartsWith("Microsoft")) continue;
                        var assembly = Assembly.Load(assemblyName);
                        var assemblyInfo = new LibraryAssemblyInfo(assemblyName.Name, assembly.Location, assemblyName);
                        assemblies.Add(assemblyInfo);
                    }
                    catch {
                    }
                }
            }

            AvailableAssemblies = assemblies;
        }

        public event AssemblyAdded AssemblyAdded;

        public IEnumerable<AssemblyInfo> AvailableAssemblies { get; private set; }

        public _Assembly Get(AssemblyInfo assemblyInfo)
        {
            return Assembly.Load(((LibraryAssemblyInfo)assemblyInfo).AssemblyName);
        }
    }
}
