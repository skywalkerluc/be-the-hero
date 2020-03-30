const { celebrate, Segments, Joi } = require('celebrate');

function validateProfileGet() {
  return celebrate({
    [Segments.HEADERS]: Joi.object()
      .keys({
        authorization: Joi.string().required()
      })
      .unknown()
  });
}

module.exports = { validateProfileGet };
