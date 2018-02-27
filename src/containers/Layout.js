import React from "react";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import "./layout.css";

export default function Layout() {
  return (
    <div id="empdp_root">
      <ProductImage />
      <ProductDescription />
    </div>
  );
}
