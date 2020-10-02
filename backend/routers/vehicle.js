// VARIABLES
const express               = require('express');
const router                = express.Router();
const vehiculeController    = require('../controllers/vehicle');

// ROADS VEHICLE MANAGEMENT
router.get("/", vehiculeController.displayVehicle)
router.get("/:id", vehiculeController.displayVehicleByID)
router.post("/", vehiculeController.addVehicle)
router.post("/delete/:id", vehiculeController.deleteVehicleByID)
router.post('/update/:id', vehiculeController.updateVehicleByID)
// END ROADS VEHICLE MANAGEMENT


module.exports = router