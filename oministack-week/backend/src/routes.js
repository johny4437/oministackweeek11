const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');


routes.get('/ongs',ongController.index);
routes.post('/ongs',ongController.create);

routes.post('/incidents',incidentController.create);

module.exports = routes;