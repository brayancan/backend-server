// Requires
var express = require('express');
// MMongus
var mongoose = require('mongoose');
// Inicializar variables 
var app = express();
// Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, Response) => {
    if (error) throw error;
    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

// Rutas
app.get('/', (Request, Response, next) => {
    Response.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});

//Escuhar peticiones del express
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});