import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Loader from '../Loader'
import { ROUTES } from '../../config'

const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ '../../pages/Cart'))

const SingleProduct = lazy(
  () => import(/* webpackChunkName: "SingleProduct" */ '../../pages/SingleProduct'),
)

const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ '../../pages/NotFound'),
)

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route
        path={ROUTES.CART}
        element={
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.SINGLE_PRODUCT}
        element={
          <Suspense fallback={<Loader />}>
            <SingleProduct />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.NOT_FOUND}
        element={
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  )
}
