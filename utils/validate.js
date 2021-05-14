const Joi = require("joi");
function validateBootcamp(input) {
  const bootSchema = Joi.object({
    name: Joi.string().min(3).required(),
    country: Joi.string().min(4).required(),
    email: Joi.string().min(6).required().email(),
  });
  return bootSchema.validate(input);
}

module.exports = validateBootcamp;
