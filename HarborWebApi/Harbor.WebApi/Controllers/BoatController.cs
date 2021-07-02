using Harbor.BL.Interface;
using Microsoft.AspNetCore.Mvc;
using Serilog;
using System;

namespace Harbor.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoatController : ControllerBase
    {
        #region Private Variables     

        /// <summary>
        /// The boat manager
        /// </summary>
        private readonly IBoatManager _boatManager;

        #endregion

        #region Constructor

        /// <summary>
        /// Initializes a new instance of the <see cref="BoatController"/> class.
        /// </summary>
        /// <param name="boatService">The boat service.</param>
        public BoatController(IBoatManager boatService)
        {
            _boatManager = boatService;
        }
        #endregion

        #region Public Methods

        /// <summary>
        /// Gets the random boats.
        /// </summary>
        /// <param name="boatCount">The boat count.</param>
        /// <returns></returns>
        [HttpGet]
        [Route("GetRandomBoats/{boatCount}")]
        public IActionResult GetRandomBoats(int boatCount)
        {
            try
            {
                return Ok(_boatManager.GetRandomBoats(boatCount));
            }
            catch (Exception ex)
            {
                Log.Logger.Error(ex, "An error occurred in GetRandomBoats.");
                return StatusCode(500, ex.Message);
            }
        }
        #endregion
    }
}
