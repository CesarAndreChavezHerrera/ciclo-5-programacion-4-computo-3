var expres = require('express')

var app = expres()

app.get('/',function(req,res){
    res.send('hola mundo')
})

app.route('/hola').get(function(req,res){
    res.send('test')
})

var serve = app.listen(8000,function(){})