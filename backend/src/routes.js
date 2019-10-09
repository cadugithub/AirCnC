const express = require("express")
const multer = require("multer")
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController")
const SpotController = require("./controllers/SpotController")
const dashBoardController = require("./controllers/DashBoardController")
const bookingController =  require('./controllers/BookingController')
//Get    - Quando eu quero buscar uma informação
//Post   - Quando eu quero criar uma nova informacao, ex: cadastro de usuarios
//Put    - Quando eu quero editar alguma informação
//Delete - Quando eu quero deletar alguma informação
//res.query - acessa query params -> parametros passados via url(para filtros)
//req.params - acessa route params(para edicao e delete)
//req.body - acessa corpo da requisicao

//app.get('/users', (req, res)=>{
//    return res.json({ idade: req.query.idade})
//})

//app.put('/users/:id', (req, res) => {
//    return res.json({ id: req.params.id})
//})

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.get('/spots',SpotController.index);

routes.post('/spots', upload.single('thumbnail'),SpotController.store);

routes.get('/dashboard',dashBoardController.show);

routes.post('/spots/:spot_id/booking', bookingController.store)
module.exports = routes;
