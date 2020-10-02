var express = require('express');
var router = express.Router();

// TEST ROUTES GARAGE
router.get('/garages', function(req, res, next) {
    res.status(200).json([{
        garage_id_1: {
            name: "Karaï Garage",
            address: "10 rue dou Fouch Karaï",
            postal_code: "94010",
            city: "Paris",
            phone: "0645985612",
            email: "karai.garage@gmail.com",
            password: "karaiGarage01",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "mecanicien", "electricien"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_2: {
            name: "Bilou Garage",
            address: "10 rue de King's Cross",
            postal_code: "69010",
            city: "Lyon",
            phone: "0645985612",
            email: "bilou.garage@gmail.com",
            password: "bilouGarage02",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "mecanicien", "electricien", "vulganisateur"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_3: {
            name: "Julie Carrosserie",
            address: "10 rue du WonderWoman",
            postal_code: "78010",
            city: "Pontoise",
            phone: "0645985612",
            email: "julie.carrosserie@gmail.com",
            password: "julieCarrosserie03",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "carrosserie"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_4: {
            name: "Elora Carroserie",
            address: "10 rue du Miss Hulk",
            postal_code: "94010",
            city: "Evry",
            phone: "0645985612",
            email: "elora.carrosserie@gmail.com",
            password: "eloraCarrosserie04",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "carrosserie"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_5: {
            name: "Reza Mecanicien",
            address: "10 rue du Dr.Doom",
            postal_code: "75010",
            city: "Paris",
            phone: "0645985612",
            email: "reza.mecanicien@gmail.com",
            password: "rezaMecanicien05",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "mecanicien"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_6: {
            name: "Ahmed Mecanicien",
            address: "10 rue du cocovin",
            postal_code: "13010",
            city: "Marseille",
            phone: "0645985612",
            email: "ahmed.mecanicien@gmail.com",
            password: "ahmedMecanicien06",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "mecanicien"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_7: {
            name: "Ali électricien",
            address: "10 rue dou Fouch Karaï",
            postal_code: "33010",
            city: "Bordeaux",
            phone: "0645985612",
            email: "ali.electricien@gmail.com",
            password: "aliElectricien07",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "electricien"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_8: {
            name: "Tess électricien",
            address: "10 rue du tess moi pas",
            postal_code: "63010",
            city: "Clermont-Ferrand",
            phone: "0645985612",
            email: "tess.electricien@gmail.com",
            password: "tessElectricien08",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "electricien"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_9: {
            name: "Mohammed vulganisateur",
            address: "10 rue de la chemise parfaite",
            postal_code: "34010",
            city: "Montpellier",
            phone: "0645985612",
            email: "mohammed.vulganisateur@gmail.com",
            password: "mohammedVulganisateur09",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "vulganisateur"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
        garage_id_10: {
            name: "Abdullah vulganisateur",
            address: "10 rue d'Istanbul",
            postal_code: "76010",
            city: "Le Havre",
            phone: "0645985612",
            email: "abdullah.vulganisateur@gmail.com",
            password: "abdullahVulganisateur10",
            siren: "484 883 459",
            siret: "484 883 459 00014",
            tva_number: "12345678901 X1234567890 1X123456789 XX123456789",
            picture: "https://placeimg.com/640/480/arch",
            type_of_service: ["garage", "vulganisateur"],
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
    }]);
});

module.exports = router;