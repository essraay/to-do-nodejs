import { Router } from 'express'
import TodoController from '../controllers/TodoController'
import validate from '../middlewares/validate'
import { createValidation } from '../validations/Todo'

const router = Router()
const controller = new TodoController()

router.route('/').get(controller.list)
router.route('/').post(validate(createValidation), controller.insert)

export default router
