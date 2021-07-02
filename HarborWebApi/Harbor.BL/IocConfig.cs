using Harbor.BL.Interface;
using Microsoft.Extensions.DependencyInjection;

namespace Harbor.BL
{
    public static class IocConfig
    {
        /// <summary>
        /// Configures the services.
        /// </summary>
        /// <param name="services">The services.</param>
        public static void ConfigureServices(ref IServiceCollection services)
        {
            services.AddTransient<IBoatManager, BoatManager>();
        }
    }
}
