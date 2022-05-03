
const fetch = require('node-fetch')
const fs = require('fs')
/*
fetch('https://restcountries.com/v2/all')
    .then((reponse)=>{
        return reponse.json()
    })
    .then((data)=>{
        console.log(data)
    })
    .then((error)=>{
        console.log(error)
    })
*/

    async function getC(){
        try{
            const reponse = await fetch('https://restcountries.com/v2/all')
            const data = await reponse.json()
            let countryList = ""
            data.forEach(country => {
                countryList += " "+country["name"]
            });

            fs.writeFile("countries.csv", countryList,(error)=>{
                console.log(error)
                return
            })


        }catch(error){
            console.log(error)
        }
    }

getC()