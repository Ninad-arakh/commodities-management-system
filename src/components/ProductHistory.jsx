import React from "react";

const ProductHistory = () => {
  return (
    <div className="w-full flex px-2 py-[9.5px] gap-1 text-sm justify-evenly items-center border border-gray-500/50">
      <div className="flex gap-1">
        <input type="checkbox" className="border-green-500 text-green-500" />
        <p>Success</p>
      </div>
      <p>arakhninad@gmail.com</p>
      <p>$100</p>
    </div>
  );
};

export default ProductHistory;
