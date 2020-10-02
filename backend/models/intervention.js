// IMPORTS
const mongoose      = require('mongoose');
const vehicle       = require('./vehicle');
const garage        = require('./garage');
const type          = require('./type');

const InterventionSchema = new mongoose.Schema({
    vehicle_id: {
        type        : mongoose.Schema.Types.ObjectId,
        ref         : vehicle,
        required    : true
    },
    garage_id: {
        type        : mongoose.Schema.Types.ObjectId,
        ref         : garage,
        required    : true
    },
    type_id: {
        type        : mongoose.Schema.Types.ObjectId,
        ref         : type,
        required    : true
    },
    date_intervention   : Date,
    hour_intervention   : Date,
    type                : String,
    duration            : Date,
    description         : String,
    rate_ht             : Number,
    tva                 : Number,
    is_validate         : Boolean,
    creation_date: {
        type    : Date,
        default : Date.now
    }
});
 
module.exports = mongoose.model('Intervention', InterventionSchema);