const soap = require('soap')
const express = require('express')
const fs = require('fs')

const app = express()

const port = 8001


const myservice = {
    ws: {
        calc: {
            somar : (args) => {
                let n = 1*args.a + 1*args.b
                return { sumres : n }
            },
            multiplicar : (args) => {
                let n = 1*args.a * 1*args.b
                return { mulres : n }
            },
        }
    }
}

const xml = fs.readFileSync('wscalc1.wsdl', 'utf8')

app.listen(port , ()=>{
    soap.listen(app, '/wscalc1', myservice, xml, ()=>{
        console.log(`Iniciando o servidor na porta: ${port}`)
    })
})
