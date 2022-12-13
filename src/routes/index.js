import { Router } from 'express'
import UserRoutes from './user'
import TodoRoutes from './todo'

import Ping from './ping'

const router = Router()

router.use('/user', UserRoutes)

router.use('/todo', TodoRoutes)

router.use('/ping', Ping)
export default router
