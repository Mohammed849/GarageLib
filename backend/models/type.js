// IMPORTS
const mongoose  = require('mongoose');

const TypeSchema = new mongoose.Schema({
    name    : String,
    creation_date: {
        type    : Date,
        default : Date.now
    }
});
  
module.exports = mongoose.model('Type', TypeSchema);