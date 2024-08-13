// import React from 'react'
// import './Footer.css';
// import { TbTruckDelivery } from "react-icons/tb";
// import { FaShieldAlt } from "react-icons/fa";
// function Footer() {
//   return (
//     <div>
//             <div className='part1'>
//                     <h3 className='text-center'>Our Advantages</h3>
                   
//                     <div className='footerpart1'>
//                         <div className='p1'>
//                                <div className='icon'>
//                                <TbTruckDelivery />
//                                </div>
//                                <div className='content'>
//                                     <h5>Express Delivery</h5>
//                                     <p>Ships in 24 Hours</p>
//                                </div>
//                         </div>
//                         <div className='p1'>
//                                <div className='icon'>
//                                <FaShieldAlt />
//                                </div>
//                                <div className='content'>
//                                     <h5>Express Delivery</h5>
//                                     <p>Ships in 24 Hours</p>
//                                </div>
//                         </div>
//                         <div className='p1'>
//                                <div className='icon'>
//                                <TbTruckDelivery />
//                                </div>
//                                <div className='content'>
//                                     <h5>Express Delivery</h5>
//                                     <p>Ships in 24 Hours</p>
//                                </div>
//                         </div>
//                         <div className='p1'>
//                                <div className='icon'>
//                                <TbTruckDelivery />
//                                </div>
//                                <div className='content'>
//                                     <h5>Express Delivery</h5>
//                                     <p>Ships in 24 Hours</p>
//                                </div>
//                         </div>
//                     </div>
//             </div>


      
//     </div>
//   )
// }

// export default Footer



import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { FaShieldAlt, FaTags, FaCreditCard } from "react-icons/fa";
import './Footer.css';

function Footer() {
    return (
      <div>
      <h3 className='text-center'>Our Advantages</h3>
     <footer className="footer">
         
         <div className="adv">
        
             <div className="expdel">
                 <TbTruckDelivery className="advt" />
                 <div>
                     <p className="mainp">Express Delivery</p>
                     <p>Ships in 24 Hours</p>
                 </div>
             </div>
             <div className="expdel">
                 <FaShieldAlt className="advt" />
                 <div>
                     <p className="mainp">Brand Warranty</p>
                     <p>100% Original products</p>
                 </div>
             </div>
             <div className="expdel">
                 <FaTags className="advt" />
                 <div>
                     <p className="mainp">Exciting Deals</p>
                     <p>On all prepaid orders</p>
                 </div>
             </div>
             <div className="expdel">
                 <FaCreditCard className="advt" />
                 <div>
                     <p className="mainp">Secure Payments</p>
                     <p>SSL / Secure certificates</p>
                 </div>
             </div>
         </div>

         <div className="footer-content">
             <div className="f1">
                 <div>
                     <h2>Tech-Shop</h2>
                     <p>Subscribe to our Email alerts to receive early discount offers, and new products info</p>
                     <input type="text" placeholder="Email Address*" /><br /><br />
                     <button className="subs">Subscribe</button>
                 </div>
                 <div className="help">
                     <h2>Help</h2><br />
                     <ul>
                         <li>FAQs</li>
                         <li>Track Order</li>
                         <li>Cancel Order</li>
                         <li>Return Order</li>
                         <li>Warranty Info</li>
                     </ul>
                 </div>
                 <div className="policies">
                     <h2>Policies</h2><br />
                     <ul>
                         <li>Return Policy</li>
                         <li>Security</li>
                         <li>Sitemap</li>
                         <li>Privacy Policy</li>
                         <li>Terms & Conditions</li>
                     </ul>
                 </div>
                 <div className="company">
                     <h2>Company</h2><br />
                     <ul>
                         <li>About Us</li>
                         <li>Contact Us</li>
                         <li>Service Centres</li>
                         <li>Careers</li>
                         <li>Affiliates</li>
                     </ul>
                 </div>
             </div>
             <br />
             <hr />
             <div className="cpyrght">
                 <div>
                     <p>2024 | Tech-Shop. All Rights Reserved. Built by | Greeshmitha</p>
                 </div>
                 <div className="icons">
                     <i className="fa-brands fa-facebook-f"></i>
                     <i className="fa-brands fa-twitter"></i>
                     <i className="fa-brands fa-instagram"></i>
                     <i className="fa-brands fa-linkedin-in"></i>
                 </div>
             </div>
         </div>
     </footer>
      </div>
       
    );
}

export default Footer;
