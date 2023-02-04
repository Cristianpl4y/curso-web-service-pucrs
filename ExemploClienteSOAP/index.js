const soap = require('soap')
const url = 'http://www.dneonline.com/calculator.asmx?wsdl'

var a = 10
var b = 5

soap.createClient(url, (err, client) => {
    
    //console.log('Descrição do WSDL', client.describe().Calculator.CalculatorSoap)
    
    // Soma
    client.Add({intA: a, intB: b}, (err, result) => {
        if(err) return console.log(`Oooops erro no método client.Add -> ${err}`) // caso de erro 
        console.log(`Deu certo meu garoto: a soma de intA(${a}) + intB(${b}) = ${result.AddResult}`) // caso sucesso
    })

    // Subtração
    client.Subtract({intA: a, intB: b}, (err, result) => {
        if(err) return console.log(`Oooops erro no método client.Subtract -> ${err}`) // caso de erro 
        console.log(`Deu certo meu garoto: a subtração de intA(${a}) - intB(${b}) = ${result.SubtractResult}`) // caso sucesso
    })

    // Multiplicação 
    client.Multiply({intA: a, intB: b}, (err, result) => {
        if(err) return console.log(`Oooops erro no método client.Multiply -> ${err}`) // caso de erro 
        console.log(`Deu certo meu garoto: a multiplicação de intA(${a}) * intB(${b}) = ${result.MultiplyResult}`) // caso sucesso
    })

    // Divisão
    client.Divide({intA: a, intB: b}, (err, result) => {
        if(err) return console.log(`Oooops erro no método client.Divide -> ${err}`) // caso de erro 
        console.log(`Deu certo meu garoto: a divisão de intA(${a}) / intB(${b}) = ${result.DivideResult}`) // caso sucesso
    })

})