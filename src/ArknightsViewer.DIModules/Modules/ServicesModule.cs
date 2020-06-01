using ArknightsViewer.Services.OperatorList.Services.Read;
using ArknightsViewer.Services.OperatorList.Services.Read.Implementation;
using Autofac;

namespace ArknightsViewer.DIModules.Modules
{
    internal class ServicesModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder
                .RegisterType<OperatorListReader>()
                .As<IOperatorListReader>()
                .InstancePerLifetimeScope();
        }
    }
}
