import { Link, useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
  function handleProductsNavigation() {
    navigate("/products");
  }
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to the <Link to="/products">list of Products</Link>
      </p>
      <button onClick={handleProductsNavigation}>NavigateToProducts</button>
    </div>
  );
}

export default Home;
