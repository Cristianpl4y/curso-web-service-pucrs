const express = require('express')
const app = express()
const port = 3010


app.use(express.json()) // interpretar arquivos json
app.use(express.urlencoded({ extended: true })) // para ler codificação de caracteres UTF-8

app.listen(port, () => console.log(`Iniciando server na porta: ${port}`))

require('./src/routes/index')(app)
