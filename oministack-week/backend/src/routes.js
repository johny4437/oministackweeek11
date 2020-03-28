const express = require('express');
const routes = express.Router();
const crypto = require('crypto');
const connection = require('./database/connection');
const ongController = require('./controllers/ongController');


routes.get('/ongs',ongController.list);
routes.post('/ongs',ongController.create);

module.exports = routes;