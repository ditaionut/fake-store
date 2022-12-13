import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, filteredCategory } from "../../features/productSlice";
import ProductItem from "./ProductItem";
import FilterCategory from "../Filtering/FilterCategory";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Products = () => {
  const getProducts = useSelector(selectProducts);
  const category = useSelector(filteredCategory);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
          <div className="d-flex justify-content-center mb-5 pb-5">
            <FilterCategory />
          </div>
          {Object.keys(getProducts).length === 0 ? (
            <Loading />
          ) : (
            <div className="d-flex flex-wrap">
              {getProducts
                .filter((product) => {
                  if (category === "all") return true;
                  return category === product.category;
                })
                .map((product) => {
                  return <ProductItem key={product.id} product={product} />;
                })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
