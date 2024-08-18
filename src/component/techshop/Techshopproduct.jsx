import React from 'react'
import Slider from '../carosal/Slider';
import FeatureProducts from '../featureproduct/FeatureProducts';
// import TopProducts from '../topproduct/TopProducts';
// import Categoryproduct from '../topproduct/categoryproduct';
import Categoryproduct from "../topproduct/Categoryproduct"
import Footer from '../footer/Footer';
import Scrollup from '../Scrollup';

function Techshopproduct() {
  return (
    <div>
      <Slider/>  
      
      <FeatureProducts/>
      <Scrollup/>
      <Categoryproduct />
    <Footer/>
     </div>
  )
}

export default Techshopproduct;
