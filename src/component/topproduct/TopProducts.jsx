import React, { useEffect, useState } from 'react'
// import productsData from '../productdetails/productsData';
import { Link } from 'react-router-dom';
import './TopProducts.css'
import { IoStarSharp } from "react-icons/io5";

function TopProducts({products}) {
  // const [initialProducts, setallproduct] = useState([]);
  // useEffect(()=>{
  //     setallproduct(productsData)
  // }, [])
  return (
  <>
    <div className=' my-4 p-4 m-4 '>
    <div className='row '>
      {/* {initialProducts.slice(0, 11).map((products) => ( */}
        <div key={products.id} className='col-md-3 mb-4 ' >
          <Link to={`/${products.id}`} className='text-decoration-none '>
            <div className='card bg-black text-white border p-1 'style={{ width: '310px',height:'auto' }}>
          <div className='img-card imgcard'style={{ width: '300px', height:'200px'}}>
          <img src={products.images[0]} alt={products.title} 
          className='card-img-top p-4 img-fluid' style={{ height: '220px', width:'300px', objectFit:'contain'}}/>
          </div>
        
             <span className='icon'> {[...Array(products.rateCount)].map(i=>< IoStarSharp key={i} className='star'/>)}</span>
        
          <div className='card-body'>
            <h2 className='card-title text-truncate cardtitle'>{products.title}</h2>
            <p className='card-text text-truncate cardinfo'>{products.info}</p>
            <hr/>
            <div className='d-flex align-items-center'>
              <h2 className='card-title text-truncate mb-0 cardfinalp'>₹{products.finalPrice}</h2>
              <h4 className='card-title text-truncate p-2 mb-0 ms-2 cardoriginalp' style={{ textDecoration: 'line-through', color:'grey'}}>₹{products.originalPrice}</h4>
            </div>
            <div className='d-flex justify-content-center mt-3 button_division'>
              <button className='btn  p-1 'style={{width:'500px' ,borderRadius:'3px', fontSize:'100px'}}><h4>Add to cart</h4></button>
            </div>
          </div>
        </div>
      </Link>
    </div>
   {/* ))}  */}
</div>
</div>

</>
  )
}

export default TopProducts;

 





       





//       {allproduct.map((product)=>(
//         <div className='container'>
//            <div className='row'>
//            <img src={product.image[1]} alt=""  height={200}/>
//             <p>{product.info}</p>
//             <hr/>
//             <h4><span>{product.originalPrice}</span><span>{product.finalPrice}</span></h4>
//            <button>Add To Cart</button>
//            </div>
//         </div>
//     ))
        
// } 