var user = require('./userModel.js'),
			mgs = require('mongoose')

			

module.exports.insertarRegistro = function(callback){
	//let insertar = new user()
	user.create({_id: new mgs.Types.ObjectId(), email:"rnavia@gmail.com", nombre: "Ricardo Navia",pass: "nextu", fechaNac:"1972/06/29"},
																	{_id: new mgs.Types.ObjectId(), email:"r.navia@gmail.com", nombre: "Ricardo Navia",pass: "nextu", fechaNac:"1972/06/29"},
																	{_id: new mgs.Types.ObjectId(), email:"naviar@gmail.com", nombre: "Ricardo Navia",pass: "nextu", fechaNac:"1972/06/29"}	)
	/*
	insertar.save((error) => {
	if (error) callback(error)
	callback(null,"registro insertado")
	}) // FIN INSERTAR.SAVE
	*/
}
