import Joi from 'joi'

export const createValidation = Joi.object({
  title: Joi.string().required(),
  isCompleted: Joi.boolean(),
  user: Joi.string().required(),
})
