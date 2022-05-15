
const path = require('path')
const csvWrite = require('csv-writer')



var Numeros = []

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


for (let i = 0; i < 30; i ++){
    Numeros.push(
        {
            "id":i,
            "numero":random(1,1000),
            "decimal":Math.random()
        }

    )
}

console.table(Numeros)

var write = csvWrite.createObjectCsvWriter({
    path:path.resolve(__dirname,'Numero Aleatorio.csv'),
    header:[
        {id: 'id',title:"ID"},
        {id: 'numero',title:"Numero"},
        {id: 'decimal',title: "decimal"}
    ]
})
write.writeRecords(Numeros).then(() => {
    console.log('hecho');
  });
  