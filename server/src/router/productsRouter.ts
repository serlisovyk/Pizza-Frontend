import { Router } from 'express'
import ProductsController from '../controllers/ProductsController.js'

const router = Router()

router.get('/', ProductsController.getAll)
router.get('/:id', ProductsController.getOne)

export default router
