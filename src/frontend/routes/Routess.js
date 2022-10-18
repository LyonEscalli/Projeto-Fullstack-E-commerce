import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from '../pages/login-page/LoginPage'
import { CartPage } from '../pages/cart-page/CartPage'
import { ProductPage } from '../pages/product-page/ProductPage'
import { SignupPage } from '../pages/signup-page/SignupPage'
import { PurchaseListPage } from '../pages/purchaselist-page/PurchaseListPage'
import { ErrorPage } from '../pages/error-page/ErrorPage'

const Routess = () => {

    return (
        <BrowserRouter>
          <Routes>
              <Route index element = {<LoginPage />} />
              <Route path = 'Product' element = {<ProductPage />} />
              <Route path = 'Cart' element = {<CartPage />}/>
              <Route path = 'Signup' element = {<SignupPage />}/>
              <Route path = 'PurchaseList' element = {<PurchaseListPage />}/>
              <Route path = '*' element = {<ErrorPage />}/>
          </Routes>
        </BrowserRouter>
    )
}

export default Routess