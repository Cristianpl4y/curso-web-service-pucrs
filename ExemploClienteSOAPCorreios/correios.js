const soap = require('soap')
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, (err, res) => {
    
    //console.log(`Descrição do WSDL: `, res.describe().AtendeClienteService.AtendeClientePort)

    // Consulta CEP 
    res.consultaCEP({cep: "98020130"}, (err, result)=>{
        if(err) return console.log(`OOOOOOOOOPS erro na consulta do CEP! ${err}`)

        console.log('RECEBA!', result.return )
    })
})