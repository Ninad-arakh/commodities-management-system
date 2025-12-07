import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import StatsGraph from "@/components/StatsGraph";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiArrowsUpDown } from "react-icons/hi2";
import Product from "@/components/Product";
import { products } from "@/common/constants";
import Link from "next/link";

const Products = () => {
  return (
    <div className="grid grid-cols-12 relative bg-pageBackground gap-2  pb-4">
      <div className="col-span-2 h-screen sticky top-0 ">
        <Sidebar />
      </div>
      <div className="col-span-10  py-4 px-5 pt-8 ">
        <Navbar />

        <div className="w-full mt-8 flex justify-between items-center px-1">
          <h2 className="text-2xl">Product</h2>
          <Link href={"/addproduct"}>
            <button className="px-2 py-1 bg-[#615cf7] text-white rounded-lg cursor-pointer">
              + Add New Product
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-12 pt-8 gap-6 ">
          {/* main div on product page  */}
          <div className="col-span-9 bg-dashboard rounded-2xl w-full  px-8 py-6 ">
            <div className="flex justify-between px-4 mb-5">
              <div className="flex gap-5">
                <h2 className="text-xl font-semibold">Published</h2>
                <h2 className="text-xl text-textGray">Draft</h2>
              </div>
              <div className="flex gap-5 items-center">
                <button className="flex pap-2  items-center border border-gray-500 px-1 pl-2 cursor-pointer text-xs rounded-lg">
                  Filter <RiArrowDropDownLine className="w-8 h-8" />
                </button>
                <button className="flex pap-2  items-center border border-gray-500 px-1 pl-2 cursor-pointer text-xs rounded-lg">
                  Download
                  <RiArrowDropDownLine className="w-8 h-8" />
                </button>
              </div>
            </div>

            <div className="w-full border-t border-b border-gray-400/30 flex justify-between px-5 py-2">
              <div className="text-textGray">
                {" "}
                <h3>Product Name</h3>
              </div>
              <div className="flex  gap-8 w-[50%]">
                <h4 className="flex items-center text-textGray text-sm gap-1">
                  Views <HiArrowsUpDown />
                </h4>
                <h4 className="flex items-center text-textGray text-sm gap-1">
                  Pricing <HiArrowsUpDown />
                </h4>
                <h4 className="flex items-center text-textGray text-sm gap-1">
                  Revenue <HiArrowsUpDown />
                </h4>
                <h4 className="flex items-center text-textGray text-sm gap-1">
                  Manage <HiArrowsUpDown />
                </h4>
              </div>
            </div>
            <div className="w-full">
              {products.map((p, id) => <Product product={p} key={id}/> )}
            </div>
          </div>

          {/* graph */}
          <div className="col-span-3 bg-dashboard rounded-2xl w-full h-72 px-8 py-6">
            <StatsGraph stroke={"#ffa800"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
