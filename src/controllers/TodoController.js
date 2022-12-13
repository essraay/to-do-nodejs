import BaseController from './BaseController'
import TodoService from '../services/TodoService'

export default class TodoController extends BaseController {
  constructor() {
    super(new TodoService())
  }
}
