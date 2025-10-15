import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    console.log(data.products);
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products page</h1>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>Title: {product.title}</h1>
            <img src={product.thumbnail} alt="" />
            <h2> Price: ${product.price}</h2>
            <p>{product.description}</p>
            <button
              className="bg-blue-500 rounded-2xl px-3 py-1 text-amber-50"
              onClick={() => navigate(`${product.id}`)}
            >
              view details
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
