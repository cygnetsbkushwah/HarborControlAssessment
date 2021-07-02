using Harbor.BusinessEntities;
using System.Collections.Generic;

namespace Harbor.BL.Interface
{
    public interface IBoatManager
    {
        /// <summary>
        /// Gets the random boats.
        /// </summary>
        /// <param name="boatCount">The boat count.</param>
        /// <returns></returns>
        public IList<BoatViewModel> GetRandomBoats(int boatCount);
    }
}
