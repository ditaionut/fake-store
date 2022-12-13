import React, { useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Home.scss";
import image from "../../assets/bg.jpeg";
import { prodInstance } from "../../api/api";
import { addProducts } from "../../features/productSlice";
import Products from "../products/Products";
import ProductsCategory from "../products/ProductsCategory";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProds = async () => {
      const response = await prodInstance.get("/products");
      console.log(response.data);
      dispatch(addProducts(response.data));
    };
    fetchProds();
  }, []);
  return (
    <div>
      <Card className="bg-dark card border-0 text-white">
        <Card.Img src={image} alt="Card image" height="550px" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-center">
          <div className="slide-container">
            <Card.Title className="card-title display-3 fw-bolder mb-0">
              NEW SEASON ARRIVALS
            </Card.Title>
            <Card.Text className="lead fs-2">
              Check out all the trends
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
      <div>
      <Products />
      
      </div>
    </div>
  );
};

export default Home;
