const	 http = require('http'),
				 path = require ('path'),
				 express = require('express'),
				 mongoose = require ('mongoose'),
				 bodyParser = require('body-parser'),
				 Routing = require('./rutas.js'),				 
			 operaciones = require('./CRUD.js')
				 
const PORT = 8082
const app = express()
const server = http.createServer(app)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('client'))  // LE INDICA AL SERVER QUE ESTEN DISPONIBLES LOS ARCHIVOS DENTRO DEL DIRECTORIO CLIENT
// PERO EL SERVIDOR DEBE EJECUTARSE DESDE LA CARPETA RAIZ DEL PROYECTO

app.use('/agenda',Routing)
server.listen(PORT, function () {
console.log("Servidor Ejecutandose en puerto: " +PORT)

}) // FIN SERVER LISTEN

// INICIO Y CONEXION CON LA BASE DE DATOS

const url = 'mongodb://localhost:27017/schedule';

mongoose.connect(url);

operaciones.insertarRegistro((error,result) => {
	if (error) console.log(error)
	console.log(result)
}) 




