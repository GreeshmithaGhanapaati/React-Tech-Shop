import React, { useState } from 'react';
import productsData from '../productdetails/productsData';
 import "./FeatureProducts.css";
 
function FeatureProducts() {

    const [initialData, setData] = useState(productsData);
    const featuredProducts = initialData.filter((product) => product.tag === "featured-product");
    return (
        <div>
            <h1 className='m-5 ml-5 text-center'> Featured Products</h1>
            <div>
                {featuredProducts.length > 0 ? (
                    <div className='d-flex'>
                        {featuredProducts.map((item) => (
                            <div key={item.id}>
                                <div className='container '>
                                   <div className='row'>
                                   <div className="card bg-black  text-white m-2">
                                      <h4>{item.title}</h4>
                                        <img src={item.images[0]} alt={item.id}  width={200} />
                                      <p className='m-5'> <span>₹{item.finalPrice}</span> <span style={{ textDecoration: 'line-through' }}>₹{item.originalPrice}</span> </p>
                                    </div>
                                   </div>
                                  
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h1>Loading....</h1>
                    </div>
                )}
               
            </div>
        </div>
    );
}

export default FeatureProducts;

