const http = require('http')
http.createServer(function(req,res){
    res.end('hola')
}).listen(8080)