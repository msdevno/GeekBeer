using System.Reflection;
using Bifrost.Execution;

namespace Infrastructure.Execution
{
    public class LibraryAssemblyInfo : AssemblyInfo
    {
        public LibraryAssemblyInfo(string name, string path, AssemblyName assemblyName) : base(name, path)
        {
            AssemblyName = assemblyName;
        }

        public AssemblyName AssemblyName { get; set; }
    }
}
