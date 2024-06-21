import Image from "next/image";
import React from "react";
import Nav from "../product-nav/Nav";
import Description from "../product-des/Description";
import RelatedPro from "../related-product/RelatedPro";
import SingleCard from "../single-product-card/SingleCard";
export default function Product({ product }) {
  return (
    <div className="bg-white flex justify-center items-center md:mt-10">
      <div className="md:w-[80%] w-full">
        <Nav title={product.name} category={product.category} />
        <SingleCard product={product}/>
        <Description/>
        <RelatedPro/>
      </div>
    </div>
  );
}
