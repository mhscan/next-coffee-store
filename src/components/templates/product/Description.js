import React from "react";

const Description = ({product}) => {
  return (
    <div>
      <p>توضیحات :</p>
      {product.longDescription}
    </div>
  );
};

export default Description;
