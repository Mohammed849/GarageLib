// IMPORTS
const mongoose      = require('mongoose');
const garage        = require('./garage');

const AgendaSchema = new mongoose.Schema({
    garage_id: {
        type        : mongoose.Schema.Types.ObjectId,
        ref         : garage,
        required    : true
    },
    availability    : Boolean,
    week_number     : Number,
    day             : String,
    beginning_hour  : Date,
    end_hour        : Date,
    creation_date: {
        type    : Date,
        default : Date.now
    }
});
 
  
module.exports = mongoose.model('Agenda', AgendaSchema);