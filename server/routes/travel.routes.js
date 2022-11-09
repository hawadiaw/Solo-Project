const TravelController = require('../controller/travel.controllers')

module.exports = (app)=>{
    app.get('/api/allMemories', TravelController.getAllMemories)
    app.get('/api/oneMemory/:id', TravelController.getOneMemory)
    app.post('/api/addMemory',TravelController.addMemory)
    app.put('/api/update/:id',TravelController.updateMemory)
    app.delete('/api/delete/:id',TravelController.deleteMemory)
}