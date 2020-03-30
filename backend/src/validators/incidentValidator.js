const { celebrate, Segments, Joi } = require('celebrate');

function validateIncidentGet() {
  return celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  });
}

function validateIncidentDelete() {
  return celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  });
}

module.exports = { validateIncidentGet, validateIncidentDelete };
