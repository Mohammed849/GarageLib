// IMPORTS
const mongoose              = require('mongoose');
const passport              = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const CustomerSchema = new mongoose.Schema({
    firstname   : String,
    lastname    : String,
    address     : String,
    postal_code : Number,
    city        : String,
    phone       : Number,
    email       : String,
    password    : String,
    picture: {
        data        : Buffer,
        contentType : String,
        url         : String,
    },
    creation_date: {
        type    : Date,
        default : Date.now
    }
});

CustomerSchema.plugin(passportLocalMongoose); 
  
module.exports = mongoose.model('Customer', CustomerSchema);