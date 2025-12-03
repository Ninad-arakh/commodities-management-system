"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//login page
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const validator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{8}$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPass = passwordRegex.test(password);
    if (!isValidEmail) {
      throw new Error("Please enter valid Email!");
    }
    if (!isValidPass) {
      throw new Error("Password must be at least 8 chars long!");
    }
    return true;
  };

  const loginHandler = async () => {
    try {
      validator();
      console.log("validation success!");
      const user = { email, password, isManager: true };
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };

  return (
    <div className="w-full box-border  h-[80dvh] flex items-center ">
      <ToastContainer
        position="top-right"
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
      <div className="border border-white/25 md:w-5/12 w-11/12 h-[60dvh] mx-auto flex flex-col text-center py-3 px-5 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold mt-8">LOGIN</h1>
        <form
          onSubmit={(e) => { e.preventDefault(); loginHandler(); }}
          className="flex flex-col gap-6 mt-16"
        >
          <div className=" text-left flex flex-col gap-2">
            <label className="text-left">Email </label>
            <input
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`py-2.5 sm:py-3 px-4 block w-full text-black border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-300 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
            />
          </div>
          <div className=" text-left flex flex-col gap-2">
            <label className="text-left">Password </label>
            <input
              type="password"
              value={password}
              required
              placeholder="at least 8 chars"
              onChange={(e) => setPassword(e.target.value)}
              className={`py-2.5 sm:py-3 px-4 block w-full text-black border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-300 dark:placeholder-neutral-500 dark:focus:ring-neutral-600`}
            />
          </div>

          <div className="mt-3">
            <button
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-800 rounded-md hover:bg-green-700 sm:w-auto sm:mb-0 cursor-pointer"
              data-primary="green-400"
              data-rounded="rounded-2xl"
              data-primary-reset="{}"
              onClick={() => loginHandler()}
            >
              Login
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
