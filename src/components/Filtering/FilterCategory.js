import React from "react";
import Filter from "./Filter";

const FilterCategory = () => {
  return (
    <div className="d-flex">
      {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map(
        (category) => (
          <Filter key={category} category={category} />
        )
      )}
    </div>
  );
};

export default FilterCategory;
