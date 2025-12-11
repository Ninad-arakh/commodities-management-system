"use client";
import React from "react";
import Image from "next/image";
import laptopImg from "@/assets/Products/laptop3.jpeg";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ product, user }) => {
  const { productName, views, pricing, revenue, id } = product;

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/api/products/${id}`);
      console.log("response : ", response.data);
      if (response.status === 200) {
        toast.success(response.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="md:px-4 py-4 grid md:grid-cols-8 grid-cols-12 border-b border-gray-400/30 gap-1">
      {/* React Toastify Container */}
      <div className="absolute">
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
      </div>
      <div className="flex items-center gap-5 md:col-span-4 col-span-2 ">
        <input type="checkbox" className="hidden md:block" />
        <Image
          src={laptopImg}
          alt="productImg"
          className="w-12 h-12 object-cover box-border p-3 bg-white rounded-xl hidden md:block"
        />
        <h2>{productName}</h2>
      </div>
      <div className=" md:col-span-4 col-span-10 pl-3 md:pl-0 grid grid-cols-4   overflow-hidden">
        <div className="col-span-3 items-center md:gap-10 gap-4  grid grid-cols-3">
          <h3 className="col-span-1 ">{views}</h3>
          <h3 className="col-span-1 ">${pricing}</h3>
          <h3 className="col-span-1 ">${revenue}</h3>
        </div>
        <div className="   grid grid-cols-2 py-2 gap-2 col-span-1 ">
          <button className="flex col-span-1 items-center border rounded-lg px-1 text-xs cursor-pointer border-gray-300/70">
            Edit <RiArrowDropDownLine />
          </button>
          {user.isManager && <button
            className="flex col-span-1 items-center border rounded-lg px-1 text-xs cursor-pointer border-gray-300/70"
            onClick={() => handleDelete()}
          >
            Delete
          </button>}
        </div>
      </div>
    </div>
  );
};

export default Product;
