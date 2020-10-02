// IMPORTS
const mongoose      = require('mongoose');
const customer      = require('./customer');

const VehicleSchema = new mongoose.Schema({
    customer_id : {
        type        : mongoose.Schema.Types.ObjectId,
        ref         : customer,
        required    : true
    },
    numberplate         : String,
    constructor         : String,
    modele              : Number,
    motor               : String,
    horse_power        : String,
    cylinder            : String,
    year                : Date,
    year_circulation    : Date,
    creation_date: {
        type    : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);