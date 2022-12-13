import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addProducts, selectProducts } from "../../features/productSlice";
import "./ProductDetails.scss";
import { prodInstance } from "../../api/api";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const productItem = useSelector(selectProducts);

  useEffect(() => {
    const fetchProds = async () => {
      const response = await prodInstance.get("/products");
      console.log(response.data);
      dispatch(addProducts(response.data));
    };
    fetchProds();
  }, []);

  console.log(productItem);
  console.log(productID);
  return (
    <div className="details-container">
      {productItem
        .filter((product) => product.id.toString() === productID)
        .map((product) => (
          <div key={product.id}>
              <h4>{product.category.toUpperCase()}</h4>
            <strong className="d-flex m-auto">{product.title}</strong>
            <div className="product-container">
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="detail-container">
                <div>
                  <strong>Reviews: </strong>
                  {product.rating.count}
                </div>
                <div>
                  <strong>Rating: </strong>
                  {product.rating.rate}
                <div>{product.description}</div>
                </div>
                <Button variant="outline-dark" className="btn btn-outline-dark">
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductDetails;
