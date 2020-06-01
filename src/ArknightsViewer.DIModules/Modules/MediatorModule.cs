using ArknightsViewer.Communication.RequestHandlers;
using Autofac;
using MediatR;
using System.Reflection;

namespace ArknightsViewer.DIModules.Modules
{
    internal class MediatorModule : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder
                .RegisterType<Mediator>()
                .As<IMediator>()
                .InstancePerLifetimeScope();
            builder.Register<ServiceFactory>(context =>
            {
                var c = context.Resolve<IComponentContext>();
                return t => c.Resolve(t);
            });
            builder.RegisterAssemblyTypes(typeof(OperatorListRequestHandler).GetTypeInfo().Assembly).AsImplementedInterfaces();
        }
    }
}
