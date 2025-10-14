import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

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
          <>
            {/* <li>{product.id}</li> */}
            <h1>Title: {product.title}</h1>
            <img src={product.thumbnail} alt="" />
            <h2> Price: ${product.price}</h2>
            <p>{product.description}</p>
          </>
        );
      })}
    </div>
  );
}

export default Products;
