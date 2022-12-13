import BaseService from './BaseService'
import Todo from '../models/Todo'

export default class TodoService extends BaseService {
  constructor() {
    super(Todo)
  }
}
