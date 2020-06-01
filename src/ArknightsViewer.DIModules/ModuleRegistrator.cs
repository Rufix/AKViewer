using ArknightsViewer.DIModules.Modules;
using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using Assembly = System.Reflection.Assembly;

namespace ArknightsViewer.DIModules
{
    public class ModuleRegistrator
    {
        public void RegisterModules(ContainerBuilder builder)
        {
            var moduleTypes = GetModuleTypes();
            foreach(var moduleType in moduleTypes)
            {
                var module = (Module)Activator.CreateInstance(moduleType);
                builder.RegisterModule(module);
            }
        }

        public IEnumerable<Type> GetModuleTypes()
        {
            List<Module> objects = new List<Module>();
            return Assembly.GetAssembly(typeof(ServicesModule)).GetTypes()
                .Where(myType => myType.IsClass && !myType.IsAbstract && myType.IsSubclassOf(typeof(Module)));
        }
    }
}
