"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Login Page Component
 * Handles basic client-side authentication using localStorage.
 * Uses Next.js app directory routing and React Toastify for UX feedback.
 */
const page = () => {
  // Local component state for controlled inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    /**
     * Auto-redirect if user is already authenticated.
     * Ensures logged-in users don't revisit the login page.
     */
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      const userObj = JSON.parse(user);
      userObj ? router.push("/") : "";
    }
  }, []);

  /**
   * Validates email + password format on the client.
   * Throws controlled errors to keep flow consistent inside try/catch.
   */
  const validator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic RFC email pattern
    const passwordRegex = /^.{8}$/; // enforces exactly 8 characters
    const trimmedEmail = email.trim();
    const trimmedPass = password.trim();

    const isValidEmail = emailRegex.test(trimmedEmail);
    const isValidPass = passwordRegex.test(trimmedPass);

    if (!isValidEmail) {
      throw new Error("Please enter valid Email!");
    }
    if (!isValidPass) {
      throw new Error(
        "Password must be at least 8 chars long! no space allowed!"
      );
    }
    return true;
  };

  /**
   * Handles login attempt.
   * Validates input → stores session → redirects to home.
   * Uses toast notifications for error handling.
   */
  const loginHandler = async () => {
    try {
      validator(); // protect early against invalid credentials
      console.log("validation success!");

      const trimmedEmail = email.trim();
      const trimmedPass = password.trim();

      // Mock user object — in real apps this would come from backend auth
      const user = { trimmedEmail, trimmedPass, isManager: true };

      // Persist session locally
      localStorage.setItem("user", JSON.stringify(user));

      // Navigate user to the dashboard/home
      router.push("/");
    } catch (err) {
      console.log(err);
      toast.error(err); // display user-friendly error message
    }
  };

  return (
    <div className="w-full box-border h-[80dvh] flex items-center">
      {/* Toast notifications container */}
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

      {/* Login form wrapper */}
      <div className="border border-white/25 md:w-5/12 w-11/12 h-[60dvh] mx-auto flex flex-col text-center py-3 px-5 rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold mt-8">LOGIN</h1>

        {/* 
          Using controlled components to capture user input.
          Prevents default form submit → triggers login handler.
        */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginHandler();
          }}
          className="flex flex-col gap-6 mt-16"
        >
          {/* Email input field */}
          <div className="text-left flex flex-col gap-2">
            <label>Email</label>
            <input
              type="text"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className={`py-2.5 sm:py-3 px-4 block w-full text-black border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-300 dark:placeholder-neutral-500`}
            />
          </div>

          {/* Password input field */}
          <div className="text-left flex flex-col gap-2">
            <label>Password</label>
            <input
              type="password"
              value={password}
              required
              placeholder="at least 8 chars"
              onChange={(e) => setPassword(e.target.value)}
              className={`py-2.5 sm:py-3 px-4 block w-full text-black border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-300 dark:placeholder-neutral-500`}
            />
          </div>

          {/* Submit button */}
          <div className="mt-3">
            <button
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-800 rounded-md hover:bg-green-700 sm:w-auto cursor-pointer"
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
