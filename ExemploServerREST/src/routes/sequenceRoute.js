const sequenceControler = require('../controllers/sequenceControler')
module.exports = (app) => {

    app.get('/sequence', sequenceControler.get)
    app.get('/sequence/:id', sequenceControler.getById)

    app.post('/sequence', sequenceControler.post)

    app.put('/sequence', sequenceControler.put)

    app.delete('/sequence/:id', sequenceControler.delete)

   
    
}