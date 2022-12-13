import React, { useEffect } from "react";

const ProductsCategory = () => {
  return (
    <div>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn-outline-dark me-2">All</button>
        <button className="btn btn-outline-dark me-2">Men's Clothing</button>
        <button className="btn btn-outline-dark me-2">Women's Clothing</button>
        <button className="btn btn-outline-dark me-2">Jewelery</button>
        <button className="btn btn-outline-dark me-2">Electronics</button>
      </div>
    </div>
  );
};

export default ProductsCategory;
