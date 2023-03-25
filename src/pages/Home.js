import React from "react";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <h2 className="heading"> Welcome to Redux toolkit store</h2>
      <section>
        <h3>Product</h3>
        <Products />
      </section>
    </div>
  );
}
