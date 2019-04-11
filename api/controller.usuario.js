'use strint';

var usuario = require('../services/usuario');

module.exports = function(req, res){
    
    usuario.get(req, res, callback);

    function callback(error, user){
        if(error){
            res.send(error);
        }else{
            res.json(user);
        }
    }
}