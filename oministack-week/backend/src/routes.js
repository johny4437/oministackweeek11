const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/login', SessionController.create);

routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.get('/incidents',incidentController.index);
routes.post('/incidents',incidentController.create);
routes.delete('/incidents/:id',incidentController.delete);

routes.get('/profile', ProfileController.index);


module.exports = routes;