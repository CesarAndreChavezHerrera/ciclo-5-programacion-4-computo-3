process.argv.forEach((index,val)=>{
    console.log(`${index}:${val}`)
});

console.log('os',process.platform)

const name = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

name.question('como tu te llama', name => {
    console.log(`que ondas ${name}`)
})

const operation = require('./functions.js')
var r=operation.suma(6,7)
console.log('el resultado es ', r)