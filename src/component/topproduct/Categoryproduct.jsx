// import React, { useState } from 'react'
// import productsData from '../productdetails/productsData';
// import TopProducts from './TopProducts';
// import './Categoryproduct.css'
// function Categoryproduct() {
//     const [filteredProduct,updatedfilterProduct]=useState(productsData);
//     const  allproduct =()=>{
//         updatedfilterProduct(productsData);
//     }
//     const categoryfilter=(category)=>{
//          const filtered=productsData.filter(product=>(product.category=== category));
//          updatedfilterProduct(filtered);
//     }
//   return (
//     <div>
//         <h1 className='m-5 ml-5 text-center'>Top Products</h1>
//       <ul className='allprdt'>
//         <li onClick={{allproduct}}>ALL</li>
//         <li onClick={()=>categoryfilter('Headphones')}>HeadPhones</li>
//         <li onClick={()=>categoryfilter('Earbuds')}>EarBuds</li>
//         <li onClick={()=>categoryfilter('Earphones')}>Earphones</li>
//         <li  onClick={()=>categoryfilter('Neckbands')}>Neckbands</li>
//       </ul>
              

//               <div className='container  p-4 m-4'>
//                 <div className='row '> 
//                 {
//                     (filteredProduct.length>0?filteredProduct:productsData).slice(0, 11).map(product=>(
//                         <div   className='col-md-3 mb-4 topcard'> 
//                              <TopProducts products ={product}/>
//                         </div>
//                     ))
//                   }
//                 </div>
                 
//               </div>
//     </div>
         
//   )
// }

// export default Categoryproduct


import React, { useState } from 'react';
import productsData from '../productdetails/productsData';
import TopProducts from './TopProducts';
import './Categoryproduct.css';

function Categoryproduct() {
    const [filteredProduct, updatedfilterProduct] = useState(productsData);

    const allproduct = () => {
        updatedfilterProduct(productsData);
    }

    const categoryfilter = (category) => {
        const filtered = productsData.filter(product => product.category === category);
        updatedfilterProduct(filtered);
    }

    return (
        <div>
            <h1 className='m-5 ml-5 text-center'>Top Products</h1>
            <ul className='allprdt'>
                <li onClick={allproduct}  className='li active'>ALL</li>
                <li onClick={() => categoryfilter('Headphones') } className='li '>HeadPhones</li>
                <li onClick={() => categoryfilter('Earbuds')} className='li '>EarBuds</li>
                <li onClick={() => categoryfilter('Earphones')} className='li '>Earphones</li>
                <li onClick={() => categoryfilter('Neckbands')} className='li '>Neckbands</li>
            </ul>

            <div className='container p-4 m-4'>
                <div className='row'>
                    {
                        filteredProduct.slice(0, 11).map(product => (
                            <div key={product.id} className='col-md-3 mb-4 '>
                                <TopProducts products={product} />

                            </div>
                        ))
                    }

                            
                </div>

            </div>
            
        </div>
    );
}

export default Categoryproduct;
