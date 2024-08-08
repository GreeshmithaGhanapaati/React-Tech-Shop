import React from 'react'
import { Route, Routes  } from 'react-router-dom'
import Techshopproduct from '../techshop/Techshopproduct';

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/'   element ={<Techshopproduct/>}/>
        </Routes>
    </div>
  )
}

export default Routing;
