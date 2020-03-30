const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const ongValidator = require('./validators/ongValidator');
const incidentValidator = require('./validators/incidentValidator');
const profileValidator = require('./validators/profileValidator');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', ongValidator.validateOngPost(), OngController.create);

routes.get(
  '/incidents',
  incidentValidator.validateIncidentGet(),
  IncidentController.index
);
routes.post('/incidents', IncidentController.create);
routes.delete(
  '/incidents/:id',
  incidentValidator.validateIncidentDelete(),
  IncidentController.delete
);

routes.get(
  '/profile',
  profileValidator.validateProfileGet(),
  ProfileController.index
);

module.exports = routes;
