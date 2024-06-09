import { useParams, Link } from "react-router-dom";
import React from "react";

function ProductDetail() {
  let params = useParams();
  return (
    <div>
      <h1>Product Detail</h1>
      <h3>{params.id}</h3>
      <p>
        <Link to={".."} relative="path">
          Back
        </Link>
      </p>
    </div>
  );
}

export default ProductDetail;
