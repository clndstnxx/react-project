import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="post">
      <center><h1>All Post</h1>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
      </center>
    </div>
  );
}

export default Show;