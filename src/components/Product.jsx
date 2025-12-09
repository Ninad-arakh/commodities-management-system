"use client";
import React from "react";
import Image from "next/image";
import laptopImg from "@/assets/Products/laptop3.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product }) => {
  const { productName, views, pricing, revenue, id } = product;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/products/${id}`);
      console.log("response : ", response.data);
      if (response.status === 200) {
        toast.success(response.data.message)
      }
    } catch (err) {
      console.log(err)
      toast.error("Something went wrong!")
    }
  };

  return (
    <div className="px-4 py-4 flex border-b border-gray-400/30 justify-between ">
      {/* React Toastify Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        limit={3}
        enableMultiContainer={false}
      />
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
          <button
            className="flex  items-center border rounded-lg px-1 text-xs cursor-pointer border-gray-300/70"
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
