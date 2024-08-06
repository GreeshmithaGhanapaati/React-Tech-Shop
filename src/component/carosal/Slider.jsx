// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Slider() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//      <img src="/images/products/jbl660nc-1.png" alt="" />
//         <Carousel.Caption>
          
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="/images/products/jbl660nc-2.png" alt="" />
//         <Carousel.Caption>
          
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//       <img src="/images/products/jbl660nc-3.png" alt="" />
//         <Carousel.Caption>
         
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;
// import { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';

// function Slider() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
//       <Carousel.Item>
//         <img src="/images/products/jbl660nc-1.png" alt=""  height={500} />
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src="/images/products/jbl660nc-2.png" alt="" height={500}  />
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img src="/images/products/jbl660nc-3.png" alt="" height={500} />
//         <Carousel.Caption>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slider;
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carosal.css'; // Import your custom CSS

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={true}>
      <Carousel.Item>
        <img src="/images/products/jbl660nc-1.png" alt="First slide"  height={400}/>
        <Carousel.Caption>
          <p>JBL Live 660NC</p>
          <h2>Keep the noise out, or in. You choose.</h2>
          <p>₹9999 <span style={{ textDecoration: 'line-through' }}>₹14,990</span></p>
          <button className="shop-now-btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/products/sonyXb910n-1.png" alt="Second slide"height={400} />
        <Carousel.Caption>
          <p>Sony WH-XB910N</p>
          <h2>Experience Immersive Sound.</h2>
          <p>₹13,489 <span style={{ textDecoration: 'line-through' }}>₹19,990</span></p>
          <button className="shop-now-btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/images/products/boat131-3.png" alt="Third slide"height={400} />
        <Carousel.Caption>
          <p>boAt Airdopes 131</p>
          <h2>Featherweight for comfort all-day.</h2>
          <p>₹1099 <span style={{ textDecoration: 'line-through' }}>₹2,990</span></p>
          <button className="shop-now-btn">Shop Now</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;


