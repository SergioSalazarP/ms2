var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./api/routes');

routes(app);

app.listen(port, function(){
    console.log('Servidor en el puerto:' + port);
});
