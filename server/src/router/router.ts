import { Router } from 'express'
import productsRouter from './productsRouter.js'
import categoriesRouter from './categoriesRouter.js'
import sortRouter from './sortRouter.js'

const router = Router()

router.use('/products', productsRouter)
router.use('/categories', categoriesRouter)
router.use('/sort', sortRouter)

export default router
