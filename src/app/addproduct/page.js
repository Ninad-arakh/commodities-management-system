"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState({
    productName: "",
    pricing: "",
    category: "",
    description: "",
    tags: "",
    discount: "",
    discountCategory: "",
  });

  const addProductHandler = async () => {
    try {
      const isEmpty = Object.values(productDetails) !== "";
      if (!isEmpty) {
        const response = await axios.post("/api/products/", productDetails);
        console.log(response);
        if (response.status === 201) {
          toast.success(response.data.message);
        }
      } else {
        toast.error("Please fill all the fields!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

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
      <div className="col-span-2 hidden md:block h-screen sticky top-0 ">
        <Sidebar />
      </div>
      <div className="col-span-12 md:col-span-10  py-4 px-5 pt-8 ">
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
            <Link href={"/products"}>
              <button className="px-1 py-1 rounded-lg border border-red-500/80 text-sm text-red-500 cursor-pointer">
                Discard change
              </button>{" "}
            </Link>
            <button
              className="px-1 py-1 rounded-lg bg-blue-500 text-sm text-white cursor-pointer"
              onClick={() => addProductHandler()}
            >
              Save
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full mt-6 gap-6 ">
          <div className="col-span-12 md:col-span-8">
            <div className=" bg-dashboard rounded-xl px-8 py-5 w-full">
              <h2 className="font-semibold">General Information</h2>
              <div className="mt-5">
                <label className="text-sm  text-textGray">Product Name</label>
                <input
                  type="text"
                  value={productDetails.productName}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      productName: e.target.value,
                    })
                  }
                  placeholder="Product Name"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />
                <label htmlFor="productCategory">Product Category</label>
                <select
                  id="productCategory"
                  name="productCategory"
                  value={productDetails.category}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      category: e.target.value,
                    })
                  }
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
                  value={productDetails.description}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      description: e.target.value,
                    })
                  }
                  placeholder="Description"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />

                <label className="text-sm  text-textGray">Tag Keyword</label>
                <textarea
                  rows={4}
                  value={productDetails.tags}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      tags: e.target.value,
                    })
                  }
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
                  type="number"
                  value={productDetails.pricing}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      pricing: e.target.value,
                    })
                  }
                  placeholder="Pricing"
                  className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                />

                <div className="w-full flex gap-5">
                  <div className="w-full">
                    <label className="text-sm  text-textGray">Discount</label>
                    <input
                      type="number"
                      value={productDetails.discount}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          discount: e.target.value,
                        })
                      }
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
                      value={productDetails.discountCategory}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          discountCategory: e.target.value,
                        })
                      }
                      placeholder="Discount Category"
                      className="w-full bg-inputBox rounded-lg px-5 py-2 mt-2 mb-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 bg-dashboard rounded-xl px-8 py-5">
            product image and thumbnail here
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
