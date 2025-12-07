"use client"
import React from "react";
import Image from "next/image";
import laptopImg from "@/assets/Products/laptop3.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";

const Product = ({product}) => {
  const {productName, views, pricing, revenue} = product;

  return (
    <div className="px-4 py-4 flex border-b border-gray-400/30 justify-between">
      <div className="flex items-center gap-5 ">
        <input type="checkbox" />
        <Image
          src={laptopImg}
          alt="productImg"
          className="w-12 h-12 object-cover box-border p-3 bg-white rounded-xl"
        />
        <h2>{productName}</h2>
      </div>
      <div className="flex  justify-between w-[50%]">
        <div className="flex items-center gap-10">
          <h3>{views}</h3>
          <h3>${pricing}</h3>
          <h3>${revenue}</h3>
        </div>
        <div className="   flex py-2 gap-2">
          <button className="flex  items-center border rounded-lg px-1 text-xs cursor-pointer border-gray-300/70">
            Edit <RiArrowDropDownLine />
          </button>
          <button className="flex  items-center border rounded-lg px-1 text-xs cursor-pointer border-gray-300/70">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
