var http = require('http')

// Criando um servidor
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Olá Mundo 🌎!')
}).listen(8080)