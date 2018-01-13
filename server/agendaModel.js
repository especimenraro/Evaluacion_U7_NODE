var mongoose = require('mongoose');
var schema = mongoose.Schema;

var agendaSchema = new schema({

title: {type: String, required: true},
start: {type: Date, required: true},
end: {type: Date, required: false},
usuario: {type: String, required: true}
}) 
var agendaModel = mongoose.model('agendas',agendaSchema);
module.exports = agendaModel;