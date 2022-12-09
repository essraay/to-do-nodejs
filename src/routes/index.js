import { Router } from 'express'
import UserRoutes from './user'

import Ping from './ping'

const router = Router()

router.use('/user', UserRoutes)

router.use('/ping', Ping)
export default router
