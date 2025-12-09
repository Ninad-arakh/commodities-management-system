import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-pageBackground">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin bg-pageBackground"></div>
    </div>
  );
};

export default Loader;
