// VARIABLES
const mongoose      = require('mongoose');
const garageModel   = require("../models/garage");

exports.addGarage = (req, res) => {
    const garage = new garageModel({
        _id                 : new mongoose.Types.ObjectId(),
        name                : req.body.name,
        address             : req.body.address,
        postal_code         : req.body.postal_code,
        city                : req.body.city,
        phone               : req.body.phone,
        email               : req.body.email,
        siren               : req.body.siren,
        siret               : req.body.siret,
        tva_number          : req.body.tva_number,
        // picture             : req.file.path.substring(11),
        types_of_service    : req.body.types_of_service
    });
    garage.save()
        .then(result => {
            res.json({
                success: true,
                message: "Garage enregistré"
            })
        })
        .catch(err => {
            res.json({
                success: false,
                message: "Garage non enregistré : Error : ", err
            })
        })
};

exports.deleteGarageByID = (req, res) => {
    // const garage = garageModel.findById(req.params.id)
    //     // .select('image')
    //     .exec()
    //     .then(garage => {
    //         // fs.unlink(`./public/img/${garage.image}`, err => {
    //         //     console.log("error : ", err)
    //         // })
                garageModel.remove({ _id: req.params.id })
                    .exec()
                    .then(result => {
                        res.json({
                            success: true,
                            message: "Garage supprimé : ", garage
                        })
                    })
                    .catch(err => {
                        res.json({
                            success: false,
                            message: "Garage non supprimé : Error : ", err
                        })
                    })
        // })
        // .catch(err => {
        //     res.json({
        //         success: false,
        //         message: "Garage non supprimé : Error : ", err
        //     })
        // })
};

exports.displayGarage = (req, res) => {
    // Returns all agenda
    garageModel.find()
        .exec()
        .then(garages => {
            res.json(garages);
        })
};

exports.displayGarageByID = (req, res) => {
    garageModel.findById(req.params.id)
        .exec()
        .then(book => {
            res.json({
                success: true,
                data: book
            })
        })
        .catch(err => {
            res.json({
                success: false,
                message: "Garage non affiché : Error : ", err
            })
        })
};

exports.updateGarageByID = (req, res) => {
    const updateGarage = {
        name                : req.body.name,
        address             : req.body.address,
        postal_code         : req.body.postal_code,
        city                : req.body.city,
        phone               : req.body.phone,
        email               : req.body.email,
        siren               : req.body.siren,
        siret               : req.body.siret,
        tva_number          : req.body.tva_number,
        types_of_service    : req.body.types_of_service
    }
    garageModel.update({ _id: req.body.id }, updateGarage)
        .exec()
        .then(res.json({
            success: true,
            message: "Garage mis à jour"
        }))
        .catch(err => {
            res.json({
                success: false,
                message: "Garage non mis à jour : Error : ", err
            })
        })
};

exports.updateImage = (req, res) => {
    const updateImgGarage = {
        
    }
    garageModel.update({ _id: req.body.id }, updateImgGarage)
        .exec()
        .then(res.json(garage))
        .catch(err => {
            "Error : ", err
        })
};

