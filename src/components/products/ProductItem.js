import React from "react";
import { Card, Button } from "react-bootstrap";
import "./ProductItem.scss";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className="col-md-3 mb-4">
        <Card className="h-100 text-center mx-1 p-4">
        <Link to={`/products/${product.id}`}>
          <Card.Img
            className="image-container"
            variant="top"
            src={product.image}
            height="250px"
          />
          <Card.Body>
            <Card.Title>{product.title.substring(0, 12)}</Card.Title>
            <Card.Text className="lead fw-bold">${product.price}</Card.Text>
          </Card.Body>
        </Link>
            <Button variant="outline-dark" className="btn btn-outline-dark">
              Buy Now
            </Button>
        </Card>
      </div>
    </>
  );
};

export default ProductItem;
