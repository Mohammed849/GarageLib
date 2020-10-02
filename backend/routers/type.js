// VARIABLES
const express           = require('express');
const router            = express.Router();
const typeController  = require('../controllers/type');

// ROADS AGENDA MANAGEMENT
router.get("/", typeController.displayType)
router.post("/", typeController.addType)
router.post("/delete/:id", typeController.deleteTypeByID)
router.post('/update/:id', typeController.updateTypeByID)
// END ROADS AGENDA MANAGEMENT

module.exports = router