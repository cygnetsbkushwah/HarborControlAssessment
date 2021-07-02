namespace Harbor.Common
{
    /// <summary>
    /// BoatT ypes
    /// </summary>
    public enum BoatTypes
    {
        /// <summary>
        /// The cargo ship
        /// </summary>
        CargoShip = 1,

        /// <summary>
        /// The sail boat
        /// </summary>
        SailBoat = 2,

        /// <summary>
        /// The speed boat
        /// </summary>
        SpeedBoat = 3
    }

    //Boat status
    public enum BoatStatus
    {
        /// <summary>
        /// The in queue
        /// </summary>
        InQueue = 1,

        /// <summary>
        /// The in progress
        /// </summary>
        InProgress = 2,

        /// <summary>
        /// The completed
        /// </summary>
        Completed = 3,

        /// <summary>
        /// The decline process
        /// </summary>
        DeclineProcess = 4
    }
}
