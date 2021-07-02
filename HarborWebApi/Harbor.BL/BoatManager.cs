using Harbor.BL.Interface;
using Harbor.BusinessEntities;
using Harbor.Common;
using Harbor.Common.Constants;
using System.Collections.Generic;

namespace Harbor.BL
{
    public class BoatManager : IBoatManager
    {
        #region Constroctor  
        
        /// <summary>
        /// Initializes a new instance of the <see cref="BoatManager"/> class.
        /// </summary>
        public BoatManager()
        {
        }
        #endregion

        #region Public Methods

        /// <summary>
        /// Gets the random boats.
        /// </summary>
        /// <param name="boatCount">The boat count.</param>
        /// <returns></returns>
        public IList<BoatViewModel> GetRandomBoats(int boatCount)
        {
            var boatList = new List<BoatViewModel>();
            for (int i = 1; i <= boatCount; i++)
            {
                BoatViewModel boat = new BoatViewModel { BoatId = i, BoatType = Helper.GeRandomValue<BoatTypes>() };
                boatList.Add(boat);
            }

            // Get boat speed & duration as per randmly generated boats
            GetMeasurements(boatList);

            return boatList;
        }

        #endregion

        #region Private Methods

        /// <summary>
        /// Gets the measurements.
        /// </summary>
        /// <param name="boatList">The boat list.</param>
        private void GetMeasurements(List<BoatViewModel> boatList)
        {
            foreach(var item in boatList)
            {
                item.BoatSpeed = (item.BoatType == BoatTypes.SpeedBoat ? Constants.SpeedBoatSpeed :
                                 (item.BoatType == BoatTypes.SailBoat ? Constants.SailBoatSpeed : Constants.CargoShipSpeed));

                item.Duration =  (item.BoatType == BoatTypes.SpeedBoat ? Constants.SpeedBoatDuration :
                                 (item.BoatType == BoatTypes.SailBoat ? Constants.SailBoatDuration : Constants.CargoShipDuration));
            }
        }
        #endregion
    }
}
