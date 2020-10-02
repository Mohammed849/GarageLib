const { RSA_NO_PADDING } = require('constants');
// VARIABLES
const mongoose      = require('mongoose');
const garageModel   = require("../models/garage");

exports.addAgenda = (req, res) => {
    const agenda = new Agenda({
        _id         : new mongoose.Types.ObjectId(),
        garage_id   : req.body.garage,
        availability: req.body.availability,
        week_number : req.body.week_number,
        day         : req.body.day,
        beggin_hour : req.file.beggin_hour,
        end_hour    : req.file.end_hour,
    });
    agenda.save()
        .then(res.json(agenda))
        .catch(err => {
            console.log("error : ", err);
        })
};

exports.deleteAgendaByID = (req, res) => {
    agendaModel.find()
        .exec()
        .then(
            agendaModel.remove({ _id: req.params.id })
                .exec()
                .then(res.json(agenda))
                .catch(err => {
                    console.log("Error : ", err);
                })
        )
};

exports.displayAgenda = (req, res) => {
    // Returns all agenda
    agendaModel.find()
        .exec()
        .then(agendas => {
            res.json(agendas);
        })
};

exports.displayAgendaByID = (req, res) => {
    garageModel.find()
        .where('id').equals(req.params.id)
        .exec()
        .then(
            agendaModel.find()
                .populate('garage')
                .exec()
                .then(res.json(agenda))
                .catch(err => {
                    "Error : ", err
                })
        )
        .catch(err => {
            "Error : ", err
        })
};

exports.updateAgendaByID = (req, res) => {
    const updateAgenda = {
        garage_id   : req.body.garage,
        availability: req.body.availability,
        week_number : req.body.week_number,
        day         : req.body.day,
        beggin_hour : req.file.beggin_hour,
        end_hour    : req.file.end_hour,
    }
    agendaModel.update({ _id: req.body.id }, updateAgenda)
        .exec()
        .then(res.json(agenda))
        .catch(err => {
            "Error : ", err
        })
};

