import React from "react";

const PopupModal = ({ setIsFirstTime }) => {
  return (
    <div className="w-full h-screen absolute inset-0 flex justify-center items-center bg-black/70 backdrop-blur-lg p-4 z-10">
      <div className="relative w-full sm:w-[45vw] sm:h-[70vh] bg-linear-to-br from-[#ff6a4f]/80 via-[#ffd7d7]/50 to-white/30 backdrop-blur-2xl shadow-[0_0_40px_rgba(255,120,100,0.3)] rounded-2xl flex flex-col items-center justify-center gap-10 p-10 ">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-xl font-bold hover:text-red-400 transition"
          onClick={() => setIsFirstTime(false)}
        >
          ✕
        </button>

        {/* Manager Section */}
        <div className="w-full text-center space-y-3">
          <h2 className="text-3xl font-semibold text-white drop-shadow-lg">
            For Manager
          </h2>

          <div className="flex justify-center gap-2 bg-black/40 backdrop-blur-3xl px-4 py-2 rounded-lg  shadow-inner">
            <h3 className="font-semibold text-white/90">Email:</h3>
            <h2 className="text-white font-bold">manager@ninad.com</h2>
          </div>

          <div className="flex justify-center gap-2 bg-black/40 backdrop-blur-3xl px-4 py-2 rounded-lg  shadow-inner">
            <h3 className="font-semibold text-white/90">Password:</h3>
            <h2 className="text-white font-bold">manager123</h2>
          </div>
        </div>

        {/* Store Keeper Section */}
        <div className="w-full text-center space-y-3">
          <h2 className="text-3xl font-semibold text-white drop-shadow-lg">
            For Store Keeper
          </h2>

          <div className="flex justify-center gap-2 bg-black/40 backdrop-blur-3xl px-4 py-2 rounded-lg  shadow-inner">
            <h3 className="font-semibold text-white/90">Email:</h3>
            <h2 className="text-white font-bold">keeper@ninad.com</h2>
          </div>

          <div className="flex justify-center gap-2 bg-black/40 backdrop-blur-3xl px-4 py-2 rounded-lg  shadow-inner">
            <h3 className="font-semibold text-white/90">Password:</h3>
            <h2 className="text-white font-bold">keeper123</h2>
          </div>
        </div>

        {/* Continue Button — standout/glowing */}
        <button
          className="px-7 py-3 bg-linear-to-r from-white to-[#ffe7e7] text-black font-semibold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all hover:scale-105"
          onClick={() => setIsFirstTime(false)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PopupModal;
