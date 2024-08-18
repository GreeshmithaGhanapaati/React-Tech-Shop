// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'


// function Productdescribe() {
//   const [details,setdetails]=useState(productsData)
//   const {id}=useParams()
//   const productdescribe=details.map(product=>(product.id))
//   return (
//     <div>
//         <h1>hihihi</h1> 
//     </div>
//   )
// }

// export default Productdescribe


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../productdetails/productsData'; // Ensure you import your products data
import { IoStarSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import './Productdescribe.css'

function Productdescribe() {
  const { id } = useParams();
  const productId = parseInt(id); // Convert id to a number

  // Find the product based on the id
  const product = productsData.find(p => p.id === productId);
   
  return (
    
    <div>
      {product ? (
        <>
        <div className='detail'>
          <div className='imgcards'>
           <div>
               <img src={product.images[0]}  alt="" />
           </div>
           <div>
           <img src={product.images[1]}  alt="" />
            </div>
            <div>
            <img src={product.images[2]}  alt="" />
            </div>
            <div>
            <img src={product.images[3]}  alt="" />
            </div>
          </div>
            <div className='mainimg'>
            <img src={product.images[0]}  alt="" />
            </div>
            <div className='content'>
              <h3>{product.title}</h3>
              <h5>{product.info}</h5>
              <p><span>{[...Array(product.rateCount)].map(i=>< IoStarSharp key={i} className='star'/>)}</span>|  <span>{product.ratings}Ratings</span></p>
                  <hr />
              <div className='d-flex align-items-center'>
              <h2 >₹{product.finalPrice}</h2>
              <h4  style={{ textDecoration: 'line-through', color:'grey'}}>₹{product.originalPrice}</h4>
            </div>
            <div className='d-flex'>
            <p className='saveamt'><span>You Save : ₹{product.originalPrice-product.finalPrice}</span> <span>({product.finalPrice/product.originalPrice*100}%)</span></p>
            <button className='tick'><TiTick/>In stock</button>
            </div>
            <p>(Inclusive of all taxes)</p>
           <hr />
           <h5>Offers and Discounts</h5>
           <div className='d-flex gap-3'>
              <div className=' pay'>No Cost EMI on Credit Card</div>
              <div className=' pay'>Pay Later & Avail Cashback</div>
           </div>
           <hr />
           <button className='btn btn-danger p-1 'style={{width:'200px' ,borderRadius:'3px', fontSize:'100px'}}><h4>Add to cart</h4></button>
            </div>

            </div>
        </>
      ) : (
        <h2>Product not found</h2>
      )}
    </div>
  );
}

export default Productdescribe;
