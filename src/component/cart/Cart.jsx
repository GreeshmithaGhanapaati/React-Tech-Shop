import React from 'react'
import { BsCartX } from "react-icons/bs";


function Cart() {
  return (
    <div>
        <div className='text-center m-5'>
        <BsCartX  style={{ color: 'red' , height:'200px',width:'200px' }} className='m-3' />
         <h2 className='m-3' >Your Cart is Empty</h2>
         <button className='btn btn-danger  m-3'>Start Shoping</button>
        </div>
    </div> 
  )
}

export default Cart 