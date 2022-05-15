const modulo = require("./fistModule")

console.log(modulo.propiedad)
modulo.saludar();

/*
console.log("tabla")
console.table()
console.group()

*/

var fs = require("fs")
var parse = require("'csv-parse")
var parser = parse.parse({columns:true},function(err,records){
    console.log(records)
})
fs.createReadStream('./lista.csv').pipe(parser)