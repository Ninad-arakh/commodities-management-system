import React from "react";
import StatsGraph from "./StatsGraph";
import ProductCommonComponent from "./ProductCommonComponent";
import flip180 from "@/assets/Products/flip180jpeg.jpeg";
import fold from "@/assets/Products/fold.jpeg";
import images from "@/assets/Products/images.jpeg";
import iphone from "@/assets/Products/iphone.jpeg";
import iphone2 from "@/assets/Products/iphone2.jpeg";
import laptop from "@/assets/Products/laptop.jpeg";
import ProductHistory from "./ProductHistory";
import Barchart2 from "./Barchart2";

const StatsTwoGraph = () => {
  return (
    <div className="grid grid-cols-12 gap-3 mt-7 ">
      <div className="col-span-4 rounded-xl bg-dashboard p-7 relative">
        <StatsGraph stroke={"#23a952"} />
      </div>

      <div className="col-span-4 rounded-xl bg-dashboard p-7 relative">
        <StatsGraph stroke={"#773ac5"} />
      </div>

      <div className="col-span-4 rounded-xl bg-dashboard p-7 relative">
        <StatsGraph stroke={"#ffa800"} />
      </div>

      <div className="col-span-4 rounded-xl bg-dashboard p-7  relative">
        <div>
            <h1 className="font-bold text-xl">Subscriptions Performance</h1>
            <p className="text-textGray">Follower this Year</p>
        </div>

        <div className="absolute inset-0 self-center flex justify-center z-30">
            <h1 className="text-6xl font-bold">+ 500 </h1>
        </div>

        <div className="h-[290px]">
            <Barchart2 />
        </div>

        <div className="mt-5 ">
            <button className="w-full px-auto bg-green-500 text-white rounded-2xl py-2">Get Started</button>
        </div>
      </div>

        {/* top sales products */}
      <div className="col-span-4 rounded-xl bg-dashboard p-7 gap-5">
        <div className="w-full ">
          <h2 className="text-xl font-bold">Top Product Sales</h2>
          <p className="text-textGray">Manage your Payments</p>
        </div>
        <div className=" w-full mt-5">
          <p className=" border border-gray-500/50 w-full flex justify-between px-3">
            <span className="text-textGray text-sm">Product</span>{" "}
            <span className="text-textGray text-sm">Amount</span>
          </p>
          <div className="border border-gray-500/50 w-full box-border">
            <ProductCommonComponent img={flip180} />
            <ProductCommonComponent img={fold} />
            <ProductCommonComponent img={images} />
            <ProductCommonComponent img={iphone} />
            <ProductCommonComponent img={iphone2} />
            <ProductCommonComponent img={laptop} />
            {/* <ProductCommonComponent img={laptop2} />
            <ProductCommonComponent img={laptop3} /> */}
          </div>
          <div className="flex w-full gap-2 justify-end mt-5 pr-1">
            <button className="rounded-sm px-2 py-1 text-sm bg-[#32854f] text-white">Previous</button>
            <button className="rounded-sm px-2 py-1 text-sm bg-[#32854f] text-white">Next</button>
        </div>
        </div>
      </div>

      {/* payment history */}
      <div className="col-span-4 rounded-xl bg-dashboard p-7">
        <div className="w-full ">
          <h2 className="text-xl font-bold">Payment History</h2>
          <p className="text-textGray">Manage Your Payments</p>
        </div>
        <div className=" w-full box-border mt-5">
          <p className="w-full flex justify-around border border-gray-500/50">
            <span className="text-sm text-textGray">Status</span>
            <span className="text-sm text-textGray">Email</span>
            <span className="text-sm text-textGray">Amount</span>
          </p>
          <ProductHistory />
          <ProductHistory />
          <ProductHistory />
          <ProductHistory />
          <ProductHistory />
          <ProductHistory />
        </div>

        <div className="flex w-full gap-2 justify-end mt-5 pr-1">
            <button className="rounded-sm px-2 py-1 text-sm bg-[#32854f] text-white">Previous</button>
            <button className="rounded-sm px-2 py-1 text-sm bg-[#32854f] text-white">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StatsTwoGraph;
