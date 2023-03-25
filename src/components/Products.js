import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { useSelector } from "react-redux";
import { STATUSES } from "../store/productSlice";
export default function Products() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());

    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  // check if loading state
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went Wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={() => handleAdd(product)} className="btn">
            {" "}
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}
