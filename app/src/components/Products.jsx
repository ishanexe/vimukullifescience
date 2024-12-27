import React from 'react';
import './Product.css';

const Products = () => {
  return (
    <>
      <div className="r">
        <h1>Products</h1>
      </div>

      <div className="product-container">
        {/* First row */}
        <div className="product">
          <img src="./newmed.jpg" alt="Diagnostic Equipment" />
          <div className="product-name">Diagnostic Equipment</div>
        </div>
        <div className="product">
          <img src="./med2.jpg" alt="Surgical Knife" />
          <div className="product-name">Surgical Knife</div>
        </div>
        <div className="product">
          <img src="./med3.jpg" alt="Surgical Knife" />
          <div className="product-name">Surgical Knife</div>
        </div>
      </div>

      <div className="product-container">
        {/* Second row */}
        <div className="product">
          <img src="./med4.jpg" alt="Refractometer" />
          <div className="product-name">Refractometer</div>
        </div>
        <div className="product">
          <img src="./med5.jpg" alt="Drape" />
          <div className="product-name">Drape</div>
        </div>
        <div className="product">
          <img src="./eyedrp.jpg" alt="Eye Drop" />
          <div className="product-name">Eye Drop</div>
        </div>
      </div>

      <div className="product-container">
        {/* Third row */}
        <div className="product">
          <img src="./intra.jpg" alt="Intraocular Lens" />
          <div className="product-name">Intraocular Lens</div>
        </div>
        <div className="product">
          <img src="./tab.jpg" alt="Medicine" />
          <div className="product-name">Medicine</div>
        </div>
      </div>
    </>
  );
};

export default Products;
