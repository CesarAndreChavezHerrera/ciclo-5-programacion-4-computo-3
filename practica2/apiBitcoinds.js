const axios = require('axios');
const fs = require('fs').promises;


axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then((response) => {
        console.log('Successfully retrieved our list of movies');

        // sacar los datones que es importante
        var datos = response.data.bpi
        var tipo_monera = ["EUR","USD","GBP"] // clasificacion de monera
        var valores = []
        
        tipo_monera.forEach(monera =>{
            var linea = monera + ": "+ datos[monera].rate.toString()
            valores.push(linea)
        })
        /*
        esta parte no funciona 
        response.data.forEach(bit => {
            console.log(`${bit['code']}, ${bit['rate']}`);
        });
        */

       //console.log(datos[lista_valores[0]])

       console.log("valor actual del bitcoinds")
       valores.forEach(v =>console.log(v))
    })