import { Router } from 'express'
import SortController from '../controllers/SortController.js'

const router = Router()

router.get('/', SortController.getAll)

export default router
