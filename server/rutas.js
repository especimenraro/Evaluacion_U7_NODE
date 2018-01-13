var express = require('express')
var userModel = require('./userModel.js')
var agendaModel = require('./agendaModel.js')
var path = require('path') // LIBRERIA PARA MANEJAR RUTAS Y FICHEROS
var viewsPath = path.join(__dirname, '../') + 'client'

var Router = express.Router()



// OBTIENE TODOS LOS EVENTOS
Router.post('/all', function (req,res) {
	let usuario= req.body.usuario
	agendaModel.find({usuario: usuario}).exec((error,result)=>{
	if (error) {
		res.status(500)
		res.json(error)	
	}
	res.json(result)
}) // FIN FIND
}) // FIN ROUTER GET

// VALIDA USUARIO
Router.post('/login', function (req,res) {
	
	usuario = req.body.user
	pass = req.body.pass
	userModel.findOne({email: usuario}).exec(function (error, result) {
		if (error) {
			res.status(500)
			res.json(error)
			}
			
			if (result) {
				if (result.pass == pass) {
				res.send("Validado")
				} // FIN IF VALIDACION DE PASS
				else {
				res.send("No pass")
			} // FIN ELSE
			}//FIN IF RESULT DISTINTO DE NULL
			else {
						res.send("No Existe")
			}
	}) // FIN FIND ONE
})
//AGREGA EVENTO
Router.post('/new', function (req,res) {
	
	let titulo = req.body.title,
		   inicio = req.body.start,
		   fin = req.body.end,
		   usuario = req.body.usuario
	
	var evento = new agendaModel({	
	title: titulo,
	start: inicio,
	end: fin,
	usuario: usuario
	}) // FIN USERMODEL
	
	console.log(usuario, evento)
	evento.save((error) => {
	if (error) {
		res.status(500)
		res.json(error)	
	}
	res.send("Evento creado correctamente")
	
	}) // FIN INSERTAR.SAVE
	
})



//ELIMINA EVENTO
Router.post('/delete/', function (req,res) {
	let eventId = req.body._id

	agendaModel.remove({_id: eventId}, function (error,result) {
		
		if (error) {
			res.status(500)
			res.json(error)		
		}
		res.send("Evento Eliminado")
	}) // FIN REMOVE
})


//ACTUALIZA EVENTO
Router.post('/actualiza', function (req,res) {
	let id = req.body.id,
			title = req.body.title,
			start = req.body.start,
			end = req.body.end,
			usuario = req.body.usuario
			
	agendaModel.replaceOne({_id:id},{title: title, start: start, end: end, usuario: usuario},function (error,result) {
		if (error) {
			res.status(500)
			res.json(error)		
		}
		res.send("Evento Actualizado")
	}) // FIN REPLACEONE
})

// HABILITA USUARIO
Router.post('/active/:id', function (req,res) {
	res.send('No se encontro')
	res.end()
})

module.exports = Router