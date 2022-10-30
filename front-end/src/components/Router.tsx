import React from 'react'
import Bag from './Bag/Bag'
import Detail from './Detail/Detail'
import Navbar from './Navbar/Navbar'
import HomePage from './Home/HomePage'
import Products from './Products/Products'
import { BrowserRouter as MRouter, Routes, Route } from 'react-router-dom';
import AddProducts from '../addProducts'
import { OrdersProvider } from '../someContext/Orders'

const Router: React.FC = () => {
  return (
    <OrdersProvider>
      <MRouter>
          <Navbar />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='products' element={<Products />} />
              <Route path='products/:id' element={<Detail />} />
              <Route path='bag' element={<Bag />} />
              <Route path='addData' element={<AddProducts />} />
          </Routes>
      </MRouter>
    </OrdersProvider>
  )
}

export default Router