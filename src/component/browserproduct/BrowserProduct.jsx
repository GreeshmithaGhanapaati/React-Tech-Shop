

// import React, { useState } from 'react';
// import './BrowserProduct.css';
// import productsData from '../productdetails/productsData';
// import TopProducts from '../topproduct/TopProducts';

// function BrowserProduct() {
//   const [products, setProducts] = useState(productsData); // initialize products with the data
//   const [selectedBrands, setSelectedBrands] = useState({}); // initialize selected brands as an empty object
//   const [selectedCategories, setSelectedCategories] = useState({}); // initialize selected categories as an empty object

//   const handleBrandChange = (event) => {
//     const { name, checked } = event.target;
//     setSelectedBrands({
//       ...selectedBrands,
//       [name]: checked,
//     });
//   };

//   const handleCategoryChange = (event) => {
//     const { name, checked } = event.target;
//     setSelectedCategories({
//       ...selectedCategories,
//       [name]: checked,
//     });
//   };

//   const filteredProducts = productsData.filter((product) => {
//     if (selectedBrands.JBL && product.brand !== 'JBL') return false;
//     if (selectedBrands.BoAt && product.brand !== 'BoAt') return false;
//     if (selectedBrands.Sony && product.brand !== 'Sony') return false;

//     if (selectedCategories.HeadPhones && product.category !== 'Headphones') return false;
//     if (selectedCategories.EarBuds && product.category !== 'Earbuds') return false;
//     if (selectedCategories.EarPhones && product.category !== 'Earphones') return false;
//     if (selectedCategories.NeckBands && product.category !== 'Neckbands') return false;

//     return true;
//   });

//   return (
//     <div className='d-flex'>
//       <div className="scrollable-div">
//         <h5>Sort By</h5>
//         <hr />
//         <p>Latest</p>
//         <p>Featured</p>
//         <p>Top Rated</p>
//         <p>Price(Lowest First)</p>
//         <p>Price(Highest First)</p>
//         <h5>Filter By</h5>
//         <hr />
//         <h5>Brands</h5>
//         <input type="checkbox" name="JBL" onChange={handleBrandChange} />
//         <label htmlFor="JBL">JBL</label>
//         <br />
//         <input type="checkbox" name="Boat" onChange={handleBrandChange} />
//         <label htmlFor="BoAt">Boat</label>
//         <br />
//         <input type="checkbox" name="Sony" onChange={handleBrandChange} />
//         <label htmlFor="Sony">Sony</label>
//         <br />
//         <br />
//         <h5>Category</h5>
//         <input type="checkbox" name="HeadPhones" onChange={handleCategoryChange} />
//         <label htmlFor="HeadPhones">HeadPhones</label>
//         <br />

// import React, { useState } from 'react';
// import './BrowserProduct.css';
// import productsData from '../productdetails/productsData';
// import TopProducts from '../topproduct/TopProducts';

// function BrowserProduct() {
//   const [products] = useState(productsData);
//   const [selectedBrands, setSelectedBrands] = useState({});
//   const [selectedCategories, setSelectedCategories] = useState({});

//   const handleBrandChange = (event) => {
//     const { name, checked } = event.target;
//     setSelectedBrands({
//       ...selectedBrands,
//       [name]: checked,
//     });
//   };

//   const handleCategoryChange = (event) => {
//     const { name, checked } = event.target;
//     setSelectedCategories({
//       ...selectedCategories,
//       [name]: checked,
//     });
//   };

//   const filteredProducts = products.filter((product) => {
//     // Filter by brand
//     const brandSelected = Object.keys(selectedBrands).some(
//       (brand) => selectedBrands[brand] && product.brand.toLowerCase() === brand.toLowerCase()
//     );

//     // Filter by category
//     const categorySelected = Object.keys(selectedCategories).some(
//       (category) => selectedCategories[category] && product.category.toLowerCase() === category.toLowerCase()
//     );

//     // Return true if no filters are selected or if the product matches any selected filter
//     return (brandSelected || !Object.keys(selectedBrands).some((key) => selectedBrands[key])) &&
//            (categorySelected || !Object.keys(selectedCategories).some((key) => selectedCategories[key]));
//   });

//   return (
//     <div className='d-flex'>
//       <div className="scrollable-div">
//         <h5>Sort By</h5>
//         <hr />
//         <p>Latest</p>
//         <p>Featured</p>
//         <p>Top Rated</p>
//         <p>Price (Lowest First)</p>
//         <p>Price (Highest First)</p>
//         <h5>Filter By</h5>
//         <hr />
//         <h5>Brands</h5>
//         <input type="checkbox" name="JBL" onChange={handleBrandChange} />
//         <label htmlFor="JBL">JBL</label>
//         <br />
//         <input type="checkbox" name="BoAt" onChange={handleBrandChange} />
//         <label htmlFor="BoAt">boAt</label>
//         <br />
//         <input type="checkbox" name="Sony" onChange={handleBrandChange} />
//         <label htmlFor="Sony">Sony</label>
//         <br />
//         <br />
//         <h5>Category</h5>
//         <input type="checkbox" name="Headphones" onChange={handleCategoryChange} />
//         <label htmlFor="Headphones">Headphones</label>
//         <br />
//         <input type="checkbox" name="Earbuds" onChange={handleCategoryChange} />
//         <label htmlFor="Earbuds">Earbuds</label>
//         <br />
//         <input type="checkbox" name="Earphones" onChange={handleCategoryChange} />
//         <label htmlFor="Earphones">Earphones</label>
//         <br />
//         <input type="checkbox" name="Neckbands" onChange={handleCategoryChange} />
//         <label htmlFor="Neckbands">Neckbands</label>
//       </div>
//       <div className='bcard'>
//         {filteredProducts.map((product) => (
//           <TopProducts key={product.id} products={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BrowserProduct;


import React, { useState } from 'react';
import './BrowserProduct.css';
import productsData from '../productdetails/productsData';
import TopProducts from '../topproduct/TopProducts';

function BrowserProduct() {
  const [products, setProducts] = useState(productsData);
  const [selectedBrands, setSelectedBrands] = useState([]); 
  const [selectedCategories, setSelectedCategories] = useState([]); 

  const handleBrandChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedBrands([...selectedBrands, name]);
    } else {
      setSelectedBrands(selectedBrands.filter((brand) => brand !== name));
    }
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, name]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== name));
    }
  };

  const filteredProducts = productsData.filter((product) => {
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false;
    return true;
  });

  return (
    <div className='d-flex '>
      <div className="scrollable-div">
        <h5>Sort By</h5>
        <hr />
        <p>Latest</p>
        <p>Featured</p>
        <p>Top Rated</p>
        <p>Price (Lowest First)</p>
        <p>Price (Highest First)</p>
        <h5>Filter By</h5>
        <hr />
        <h5>Brands</h5>
        <input type="checkbox" name="JBL" onChange={handleBrandChange} />
        <label htmlFor="JBL">JBL</label>
        <br />
        <input type="checkbox" name="boAt" onChange={handleBrandChange} />
        <label htmlFor="boAt">boAt</label>
        <br />
        <input type="checkbox" name="Sony" onChange={handleBrandChange} />
        <label htmlFor="Sony">Sony</label>
        <br />
        <br />
        <h5>Category</h5>
        <input type="checkbox" name="Headphones" onChange={handleCategoryChange} />
        <label htmlFor="Headphones">Headphones</label>
        <br />
        <input type="checkbox" name="Earbuds" onChange={handleCategoryChange} />
        <label htmlFor="Earbuds">Earbuds</label>
        <br />
        <input type="checkbox" name="Earphones" onChange={handleCategoryChange} />
        <label htmlFor="Earphones">Earphones</label>
        <br />
        <input type="checkbox" name="Neckbands" onChange={handleCategoryChange} />
        <label htmlFor="Neckbands">Neckbands</label>
      </div>
      <div className='bcard'>
            {filteredProducts.map((product) => (
            <TopProducts key={product.id} products={product} />
            ))}
        </div>
       
    </div>
  );
}

export default BrowserProduct;
