var express = require('express');
var router = express.Router();

// CUSTOMERS LIST
let customers = {
    julie: {
        firstname: "Julie",
        lastname: "Desvaux",
        address: "10 rue de SuperWoman",
        postal_code: "98010",
        city: "Lyon",
        phone: "0645985612",
        email: "julie.desvaux@gmail.com",
        password: "julieDesvaux01",
        picture: "https://randomuser.me/api/portraits/women/81.jpg",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    reza: {
        firstname: "Reza",
        lastname: "Belounis",
        address: "20 rue de Dr.Doom",
        postal_code: "34020",
        city: "Paris",
        phone: "0676120958",
        email: "reza.belounis@gmail.com",
        password: "rezaBelounis02",
        picture: "https://randomuser.me/api/portraits/men/3.jpg",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    elora: {
        firstname: "Elora",
        lastname: "Bourel",
        address: "30 rue de Miss Hulk",
        postal_code: "89030",
        city: "La Baule",
        phone: "0676120958",
        email: "elora.bourel@gmail.com",
        password: "eloraBourel03",
        picture: "https://randomuser.me/api/portraits/women/57.jpg",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    bilel: {
        firstname: "Bilel",
        lastname: "Ayachi",
        address: "40 rue de James Bond",
        postal_code: "21040",
        city: "Bordeaux",
        phone: "0676120958",
        email: "elora.bourel@gmail.com",
        password: "eloraBourel03",
        picture: "https://randomuser.me/api/portraits/women/57.jpg",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    ali: {
        firstname: "Ali",
        lastname: "Bomaye",
        address: "40 rue du Break Dance",
        postal_code: "43040",
        city: "Marseille",
        phone: "0663741085",
        email: "ali.bomaye@gmail.com",
        password: "aliBomaye04",
        picture: "https://randomuser.me/api/portraits/men/23.jpg",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    mohammed: {
        firstname: "Mohammed",
        lastname: "Ali",
        address: "50 rue de la chemise parfaite",
        postal_code: "87040",
        city: "Lille",
        phone: "0676214567",
        email: "mohammed.ali@gmail.com",
        password: "mohammedAli05",
        picture: "https://randomuser.me/api/portraits/men/25.jpg",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    }
}

// TEST ROUTES VEHICULE
router.get('/vehicles', function(req, res, next) {
  res.status(200).json([{
    julie: {
        customer_id: {
            type: "customer",
            ref: customers.julie,
            required: true
        },
        numberplate: "AB-344-JD",
        constructor: "Nissan",
        modele: "Yaris",
        motor: "A plat",
        horse_power: "12ch",
        cylinder: "3",
        year: "2020",
        year_circulation: "2016",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    reza: {
        customer_id: {
            type: "customer",
            ref: customers.reza,
            required: true
        },
        numberplate: "CR-233-RB",
        constructor: "Mitsubishi",
        modele: "3000 GT",
        motor: "V",
        horse_power: "225ch",
        cylinder: "4",
        year: "2020",
        year_circulation: "1998",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    elora: {
        customer_id: {
            type: "customer",
            ref: customers.elora,
            required: true
        },
        numberplate: "NE-556-EB",
        constructor: "Lotus",
        modele: "Elise",
        motor: "V",
        horse_power: "120ch",
        cylinder: "4",
        year: "2020",
        year_circulation: "2001",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    bilel: {
        customer_id: {
            type: "customer",
            ref: customers.bilel,
            required: true
        },
        numberplate: "FG-7777-BA",
        constructor: "Rolls Royce",
        modele: "Phantom VII",
        motor: "W",
        horse_power: "460ch",
        cylinder: "6",
        year: "2020",
        year_circulation: "2016",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    ali: {
        customer_id: {
            type: "customer",
            ref: customers.ali,
            required: true
        },
        numberplate: "JK-978-AB",
        constructor: "Peugeot",
        modele: "106",
        motor: "A plat",
        horse_power: "45ch",
        cylinder: "4",
        year: "2020",
        year_circulation: "1991",
        creation_date: {
            type: new Date().toLocaleString().split(',')[0],
            default: new Date().toLocaleString().split(',')[0]
        }
    },
    mohammed: {
        customer_id: {
            type: "customer",
            ref: customers.mohammed,
            required: true
        },
        numberplate: "TY-123-MA",
        constructor: "Renault",
        modele: "Clio",
        motor: "V",
        horse_power: "54ch",
        cylinder: "4",
        year: "2020",
        year_circulation: "2012",
            creation_date: {
                type: new Date().toLocaleString().split(',')[0],
                default: new Date().toLocaleString().split(',')[0]
            }
        },
    }]);
});

module.exports = router;