var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({
email: {type: String, required: true, unique: true},
nombre: {type: String, required: true},
pass: {type: String, required: true},
fechaNac: {type: Date, required: true}


}) // FIN USER SCHEMA

var userModel = mongoose.model('usuario',userSchema);
module.exports = userModel;