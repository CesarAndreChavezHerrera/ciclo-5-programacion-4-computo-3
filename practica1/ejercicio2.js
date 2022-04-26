
//Escriba un programa que le solicite dos números y permita realizar las operaciones básicas, el usuario debe seleccionar la operación a realizar. 
function asignacion (){
    return require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
})
}



var numero1 , numero2 , tipo_operacion , salir_programa

const readline = require('readline')
var lectura = readline.createInterface(
    process.stdin,process.stdout
)

lectura.setPrompt('valor ')
lectura.prompt()
lectura.on('line',(dato)=>{
    numero1 =dato
    
    lectura.close()
})
lectura.setPrompt('valor 2 ')
lectura.prompt()
lectura.on('line',(dato)=>{
    numero2 =dato
    
    lectura.close()
})

    /*
dato2.question('ingrese el segundo dato : ',dato => {
        numero2 = dato    
        console.log(`el numero fue: ${dato}`)
        })
/*
salir.question('desea salir del programa SI[1]   NO[0] : ',salir => {
    salir_programa = salir    
    console.log(salir)
    })
*/
/*
var r = dato1.question('ingrese el primer dato', dato1 => {
    console.log(`dato ingresado  ${dato1}`)
    process.exit()
})
*/

//process.exit()