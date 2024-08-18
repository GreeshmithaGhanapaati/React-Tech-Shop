import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Techshopproduct from '../techshop/Techshopproduct';
import Cart from '../cart/Cart';
import Productdescribe from '../productdescribe/Productdescribe';
import BrowserProduct from '../browserproduct/BrowserProduct';

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/'   element ={<Techshopproduct/>}/>
            <Route path='/cart' element ={<Cart/>}/>
            <Route path='/Productdescribe/:id' element ={<Productdescribe/>}/>
            <Route path='/BrowserProduct' element ={<BrowserProduct/>}/>
        </Routes>
    </div>
  )
}

export default Routing;
