// VARIABLES
const express           = require('express');
const router            = express.Router();
// const multer            = require('multer');
const garageController  = require('../controllers/garage');
const { upload } = require('../middleware/multer');

// ROADS GARAGE MANAGEMENT
router.get("/", garageController.displayGarage)
router.get("/:id", garageController.displayGarageByID)
router.post("/", upload.single('image'), garageController.addGarage)
router.post("/delete/:id", garageController.deleteGarageByID)
router.post('/update/:id', garageController.updateGarageByID)
router.post('/updateImage', upload.single('image'), garageController.updateImage)
// END ROADS GARAGE MANAGEMENT

module.exports = router