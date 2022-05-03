const test1 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})



function saludo(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(    
                test1.question(mensaje,function(name) {
                console.log(`que ondas ${name}`)
                test1.close()
                return name
                }
                
                ))
        },2000)
    })
}

async function mensaje(){

    const mensaje = await saludo();
    console.log("mensaje: ",await mensaje)
}

mensaje()

