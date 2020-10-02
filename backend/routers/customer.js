// VARIABLES
const express               = require('express');
const router                = express.Router();
// const multer                = require('multer');
const customerController    = require('../controllers/customer');
const { upload } = require('../middleware/multer');

// ROADS CUSTOMER MANAGEMENT
router.get("/", customerController.displayCustomer)
router.get("/:id", customerController.displayCustomerByID)
router.post("/", upload.single('image'), customerController.addCustomer)
router.post("/delete/:id", customerController.deleteCustomerByID)
router.post('/update/:id', customerController.updateCustomerByID)
router.post('/updateImage', upload.single('image'), customerController.updateImage)
// END ROADS CUSTOMER MANAGEMENT

module.exports = router