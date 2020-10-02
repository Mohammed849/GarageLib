var express = require('express');
var router = express.Router();

// TEST ROUTES TYPE
router.get('/types', function(req, res, next) {
    res.status(200).json([{
        garage: {
            type: "garage",
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        carroserie: {
            type: "carroserie",
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        mecanicien: {
            type: "mecanicien",
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        electricien: {
            type: "electricien",
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        vulganisateur: {
            type: "garage",
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
    }]);
});

module.exports = router;