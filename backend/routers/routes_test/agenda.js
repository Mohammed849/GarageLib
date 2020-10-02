var express = require('express');
var router = express.Router();

// TEST ROUTES AGENDA
router.get('/agenda', function(req, res, next) {
  res.status(200).json([{
    garage_id_1: {
        type: 'Karaï Garage',
        ref: 'garage',
        required: true
    },
    garage_id_2: {
        type: 'Bilou Garage',
        ref: 'garage',
        required: true
    },
    garage_id_3: {
        type: 'Julie Carrosserie',
        ref: 'carrosserie',
        required: true
    },
    garage_id_4: {
        type: 'Elora Carrosserie',
        ref: 'carrosserie',
        required: true
    },
    garage_id_5: {
        type: 'Reza Mecanicien',
        ref: 'mecanicien',
        required: true
    },
    garage_id_6: {
        type: 'Ahmed Mecanicien',
        ref: 'mecanicien',
        required: true
    },
    garage_id_7: {
        type: 'Ali électricien',
        ref: 'electricien',
        required: true
    },
    garage_id_8: {
        type: 'Tess électricien',
        ref: 'electricien',
        required: true
    },
    garage_id_9: {
        type: 'Mohammed vulganisateur',
        ref: 'vulganisateur',
        required: true
    },
    garage_id_10: {
        type: 'Abdullah vulganisateur',
        ref: 'vulganisateur',
        required: true
    },
    availability: true,
    week_number: {
        lundi: "Lundi",
        mardi: "mardi",
        mercredi: "mercredi",
        jeudi: "jeudi",
        vendredi: "vendredi",
        samedi: "samedi",
        dimanche: "dimanche"
    },
    day: {
        jour1: "01/09/2020",
        jour2: "02/09/2020",
        jour3: "03/09/2020",
        jour4: "04/09/2020",
        jour5: "05/09/2020",
        jour6: "06/09/2020",
        jour7: "07/09/2020",
        jour8: "08/09/2020",
        jour9: "09/09/2020",
        jour10: "10/09/2020"
    },
    beginning_hour: {
        huit: "8h",
        neuf: "9h",
        dix:  "10h",
        onze: "11h",
        douze: "12h",
        treize: "13h",
        quatorze: "14h",
        quinze: "15h",
        seize: "16h",
        dixsept: "17h",
        dixhuit: "18h",
        dixneuf: "19h"
    },
    end_hour: {
        huit: "8h",
        neuf: "9h",
        dix:  "10h",
        onze: "11h",
        douze: "12h",
        treize: "13h",
        quatorze: "14h",
        quinze: "15h",
        seize: "16h",
        dixsept: "17h",
        dixhuit: "18h",
        dixneuf: "19h"
    },
    creation_date: {
        type: new Date().toLocaleString().split(',')[0],
        default: new Date().toLocaleString().split(',')[0]
    }
  }]);
});

module.exports = router;