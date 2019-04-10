'use strint';

var acerca = require('./controller.acerca');
var usuario = require('./controller.usuario');

module.exports = function(app){
    app.get('/acerca', acerca);
    app.get('/usuario/:id', usuario);
}