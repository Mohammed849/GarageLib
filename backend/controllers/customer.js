// VARIABLES
const mongoose      = require('mongoose');
const customerModel = require("../models/customer");

// router.get("/", customerController.displayCustomer)
// router.get("/:id", customerController.displayCustomerByID)
// router.post("/", upload.single('image'), customerController.addCustomer)
// router.post("/delete/:id", customerController.deleteCustomerByID)
// router.post('/update/:id', customerController.updateCustomerByID)
// router.post('/updateImage', upload.single('image'), customerController.updateImage)

exports.addCustomer = (req, res) => {
    console.log("addCustomer");
}

exports.deleteCustomerByID = (req, res) => {
    console.log("deleteCustomerByID");
}

exports.displayCustomer = (req, res) => {
    console.log("displayCustomer");
}

exports.displayCustomerByID = (req, res) => {
    console.log("displayCustomerByID");
}

exports.updateCustomerByID = (req, res) => {
    console.log("updateCustomerByID");
}

exports.updateImage = (req, res) => {
    console.log("updateImage");
}