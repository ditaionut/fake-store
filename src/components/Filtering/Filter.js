import React from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../../features/productSlice";

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-outline-dark me-2"
        onClick={() => {
          dispatch(addCategory(category));
        }}
      >
        {category}
      </button>
    </div>
  );
};

export default Filter;
