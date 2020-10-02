// VARIABLES
const mongoose      = require('mongoose');
const typeModel   = require("../models/type");

exports.addType = (req, res) => {
    const typoe = new typeModel({
        _id     : new mongoose.Types.ObjectId(),
        name    : req.body.name
    });
    typeModel.register(type, req.body.name, function(err) {
        if (err) {
            res.json({
                success: false,
                message: "Type non enregistré : Error : ", err
            })
        } else {
            res.json({
                success: true,
                message: "Type enregistré"
            })
        }        
    })
};

exports.displayType = (req, res) => {
    // Returns all agenda
    typeModel.find()
        .exec()
        .then(types => {
            res.json(types);
        })
};

exports.deleteTypeByID = (req, res) => {
    console.log("deleteTypeById");
}

exports.updateTypeByID = (req, res) => {
    console.log("updateTypeByID");
}