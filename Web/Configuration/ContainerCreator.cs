using Bifrost.Configuration;
using Bifrost.Execution;
using Bifrost.Ninject;
using Ninject;

namespace Web.Configuration
{
    public class ContainerCreator : ICanCreateContainer
    {
        internal static IKernel Kernel;

        static ContainerCreator()
        {
            Kernel = new StandardKernel();
        }

        public IContainer CreateContainer()
        {
            var container = new Container(Kernel);
            return container;
        }
    }
}
 