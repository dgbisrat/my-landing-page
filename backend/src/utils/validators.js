const Joi = require('joi');

const signupSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),
  fatherName: Joi.string().min(2).max(50).allow('', null),
  grandName: Joi.string().min(2).max(50).allow('', null),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().pattern(/^[0-9+\-\s()]{10,20}$/).required(),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    }),
  birthDate: Joi.date().iso().max('now').required(),
  location: Joi.string().max(200).allow('', null)
});

const loginSchema = Joi.object({
  identifier: Joi.string().required(),
  password: Joi.string().required()
});

module.exports = { signupSchema, loginSchema };