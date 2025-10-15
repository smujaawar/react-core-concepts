import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchDetails = async () => {
    const resp = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await resp.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
      <h2>Product Details</h2>
      <img src={product.thumbnail} alt={product.title} />
      <h1>Title: {product.title}</h1>
      <h2>Price: {product.price}</h2>
      <p>Rating: {product.rating}</p>
      <p>Description of the product: {product.description}</p>
    </div>
  );
}

export default ProductDetails;
