// Define as rotas e verbos que vai ser respondido pela minha aplicação

// Todas serão respondidas pelo sequenceRoute 
const SequenceRoute = require('./sequenceRoute')
module.exports = (app) => {
    SequenceRoute(app)
}