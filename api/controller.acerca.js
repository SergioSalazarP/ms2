'use strict';

var propiedades = require('../package.json');

module.exports = function(req, res){
    res.json({
        name: propiedades.name,
        version: propiedades.version
    })
}