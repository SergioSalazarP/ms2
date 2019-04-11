var request = require('request');

module.exports = {
    get: function(req, res, next){
        var url = 'https://reqres.in/api/users'+ req.params.id;
        request(url, function(error, response, body){
            if(!error && response.statusCode == 200){
                 response = JSON.parse(body);
                res.send(response);
            } else{
                 console.log(response.statusCode + response.body);                    res.send('No localizamos al usuario');
            }
            next();
        })
    }
}
