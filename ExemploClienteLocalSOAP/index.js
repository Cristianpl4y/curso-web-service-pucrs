const soap = require('soap')
const url = 'http://localhost:8001/wscalc1?wsdl'

var a = 5
var b = 5

soap.createClient(url, (err, client) => {
    
    console.log('Descrição do WSDL', client.describe().ws.calc)


    client.somar({a: a, b: b}, (err, res)=>{
        if(err) throw err
        console.log(`A soma de ${a} + ${b} = ${res.sumres}`)
    })

    client.multiplicar({a: a, b: b}, (err, res)=>{
        if(err) throw err
        console.log(`A multiplicação de ${a} * ${b} = ${res.mulres}`)
    })

})