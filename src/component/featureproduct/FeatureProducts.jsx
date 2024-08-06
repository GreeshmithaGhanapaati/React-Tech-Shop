import React, { useEffect, useState } from 'react'
import productsData from '../productdetails/productsData';
import "./FeatureProducts.css";
function FeatureProducts() {
    const [featureproduct ,setfeatureproduct]=useState([]);
    useEffect(()=>{
            setfeatureproduct(productsData);
    })
   
  return (
    <div>
        <h1>Featured Products</h1>{
 featureproduct.length >0 (<div> 
    {
        featureproduct.map((product) => (
            <div key={product.id} className="slider-item">
              <div className="product-card">
                <img src={product.image[0]} alt=''/>
                <h3>{product.title}</h3>
                <p className="price">{product.finalPrice} <span className="old-price">{product.originalPrice}</span></p>
              </div>
            </div>
          ))
    }
 </div>) & (<div>Loading....! </div>)
        }
       
    </div>
  )
}

export default FeatureProducts
