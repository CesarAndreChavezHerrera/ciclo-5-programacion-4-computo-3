/// test de idea multiples peticiones de consola 


/*
const c = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

const a = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})


function a_(){
    a.question("test a ",t =>{
        console.log(t)
    })
}

function  test(e){
    c.question('como tu te llama',function(name) {
        console.log(`que ondas ${name}`)
        e();
    })
}


test(a_)
*/
/*
var a 
var salir = true
var accion1 = false

const test1 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})


console.log(typeof(a) == "undefined")
test1.question('como tu te llama',function(name) {
    console.log(`que ondas ${name}`)
    a = name    
    test1.close()
    console.log(a)
})



while(salir){
    if(typeof(a) != "undefined"){
        salir = false
    }
}

console.log(a)

*/
/*

var a 
const test1 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
function mensaje(mensaje){
    test1.question(mensaje,function(name) {
        console.log(`que ondas ${name}`)
        test1.close()
        return name
    })
}

async function leer(){
    a = await mensaje("ingrese su nombre")
    console.log(a)
}



leer();



*/

const datos = "hola"

function getdatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(datos)
        },2000)
    })
}

getdatos().then((dato)=>console.log(dato))

var a 
const test1 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

function mostrar(mensaje){
    test1.question(mensaje,function(name) {
        console.log(`que ondas ${name}`)
        test1.close()
        return name
    })

}

const mensaje1= ()=>{

    return new Promise((resolve,reject) =>{
        resolve(mostrar("nombre"))
    })
}


const mensaje2= ()=>{

    return new Promise((resolve,reject) =>{
        resolve(mostrar("apellido"))
    })
}
mensaje1().then((name)=>{
    console.log(name)
    mensaje2()
    mensaje2().then((t)=>console.log(t))
}
    )



