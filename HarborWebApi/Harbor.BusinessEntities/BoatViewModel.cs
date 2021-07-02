using Harbor.Common;

namespace Harbor.BusinessEntities
{
    public class BoatViewModel
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="BoatViewModel"/> class.
        /// </summary>
        public BoatViewModel()
        {
            BoatStatus = BoatStatus.InQueue;
        }

        /// <summary>
        /// Gets or sets the boat identifier.
        /// </summary>
        /// <value>
        /// The boat identifier.
        /// </value>
        public int BoatId { get; set; }

        /// <summary>
        /// Gets or sets the boat speed.
        /// </summary>
        /// <value>
        /// The boat speed.
        /// </value>
        public int BoatSpeed { get; set; }

        /// <summary>
        /// Gets or sets the duration.
        /// </summary>
        /// <value>
        /// The duration.
        /// </value>
        public int Duration { get; set; }

        /// <summary>
        /// Gets or sets the type of the boat.
        /// </summary>
        /// <value>
        /// The type of the boat.
        /// </value>
        public BoatTypes BoatType { get; set; }

        /// <summary>
        /// Gets or sets the boat status.
        /// </summary>
        /// <value>
        /// The boat status.
        /// </value>
        public BoatStatus BoatStatus { get; set; }
    }
}
