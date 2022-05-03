const fs = require('fs')
const filename = 'file.txt'
const data =fs.readFileSync(filename)
console.log(data.toString());
console.log("sincrono")

fs.readFile(filename,(err,dato)=>{
    if(err){
        console.log(err);
    }
    console.log(dato.toString())
})
console.log("asincrono")