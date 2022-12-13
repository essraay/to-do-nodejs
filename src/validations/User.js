import Joi from 'joi'

export const createValidation = Joi.object({
  fullName: Joi.string().required(),
  mail: Joi.string().required(),
  password: Joi.string(),
})

export const loginValidation = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().required(),
})

export const refreshTokenValidation = Joi.object({
  refreshToken: Joi.string().required(),
})
