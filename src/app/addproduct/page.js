"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const AddProduct = () => {
  
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined") return;
    const rawUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (!rawUser || !token) {
      router.replace("/login");
      return;
    }
  }, []);
  return (
    <div className="grid grid-cols-12 relative bg-pageBackground gap-2  pb-4">
      <div className="col-span-2 h-screen sticky top-0 ">
        <Sidebar />
      </div>
      <div className="col-span-10  py-4 px-5 pt-8 ">
        <Navbar />

        <div className="w-full mt-8 flex justify-between items-center px-1">
          <h2 className="text-2xl">Add Product</h2>
          <Link href={"/addproduct"}>
            <button className="px-2 py-1 bg-[#615cf7] text-white rounded-lg cursor-pointer">
              + Add New Product
            </button>
          </Link>
        </div>

        <div className="w-full mt-8 flex justify-between items-center px-6 bg-dashboard py-5 rounded-xl">
          <h2>Add New Product</h2>
          <div className="flex gap-3">
            <button className="px-1 py-1 rounded-lg border border-red-500/80 text-sm text-red-500 cursor-pointer">
              Discard change
            </button>
            <button className="px-1 py-1 rounded-lg bg-blue-500 text-sm text-white cursor-pointer">
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full mt-6 gap-6">
          <div className="col-span-8">
            <div className=" bg-dashboard rounded-xl px-8 py-5 w-full">
              <h2 className="font-semibold">General Information</h2>
              <div className="mt-5">
                <label className="text-sm  text-textGray">Product Name</label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />
                <label htmlFor="productCategory">Product Category</label>
                <select
                  id="productCategory"
                  name="productCategory"
                  // value={formData.productCategory}
                  // onChange={handleChange}
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                >
                  <option value="">Product Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="food">Food</option>
                </select>

                <label className="text-sm  text-textGray">Description</label>
                <textarea
                  rows={4}
                  placeholder="Description"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />

                <label className="text-sm  text-textGray">Tag Keyword</label>
                <textarea
                  rows={4}
                  placeholder="Tag Keyword"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />
              </div>
            </div>
            <div className=" bg-dashboard rounded-xl mt-6 px-8 py-5 w-full">
              <h2 className="font-semibold">Pricing</h2>
              <div className="mt-5">
                <label className="text-sm  text-textGray">Price</label>
                <input
                  type="text"
                  placeholder="Pricing"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />

                <div className="w-full flex gap-5">
                  <div className="w-full">
                    <label className="text-sm  text-textGray">Discount</label>
                    <input
                      type="text"
                      placeholder="Discount"
                      className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                    />
                  </div>
                  <div className="w-full">
                    <label className="text-sm  text-textGray">
                      Discount Category
                    </label>
                    <input
                      type="text"
                      placeholder="Discount Category"
                      className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-dashboard rounded-xl px-8 py-5">
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
