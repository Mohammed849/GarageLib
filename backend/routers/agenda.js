// VARIABLES
const express           = require('express');
const router            = express.Router();
const agendaController  = require('../controllers/agenda');

// ROADS AGENDA MANAGEMENT
router.get("/", agendaController.displayAgenda)
router.get("/:id", agendaController.displayAgendaByID)
router.post("/", agendaController.addAgenda)
router.post("/delete/:id", agendaController.deleteAgendaByID)
router.post('/update/:id', agendaController.updateAgendaByID)
// END ROADS AGENDA MANAGEMENT

module.exports = router