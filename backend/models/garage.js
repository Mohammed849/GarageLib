// IMPORTS
const mongoose              = require('mongoose');
const passport              = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const GarageSchema = new mongoose.Schema({
    name        : String,
    address     : String,
    postal_code : Number,
    city        : String,
    phone       : Number,
    email       : String,
    password    : String,
    siren       : Number,
    siret       : Number,
    tva_number  : String,
    picture: {
        data        : Buffer,
        contentType : String,
        url         : String,
    },
    types_of_service : [String],
    creation_date: {
        type    : Date,
        default : Date.now
    }
});

GarageSchema.plugin(passportLocalMongoose); 
  
module.exports = mongoose.model('Garage', GarageSchema);