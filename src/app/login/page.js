"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import one from "@/assets/red.jpg";
import two from "@/assets/blue.jpg";
import Image from "next/image";
import google from "@/assets/google.png";
import facebook from "@/assets/facebook.png";

/**
 * Login Page Component
 * Performs simple client-side login using localStorage (mock auth).
 * Includes field validation + checkbox validation for T&C acceptance.
 */
const Login = () => {
  // Controlled fields for email/password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Checkbox state for Terms & Conditions
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  useEffect(() => {
    /**
     * Redirects authenticated users away from login page.
     * Prevents logged-in session from accessing login UI.
     */
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      const userObj = JSON.parse(user);
      userObj ? router.push("/") : "";
    }
  }, []);

  /**
   * Client-side validator for email, password, and T&C checkbox.
   * Throws controlled errors that are caught inside loginHandler().
   */
  const validator = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{8,}$/;

    const trimmedEmail = email.trim();
    const trimmedPass = password.trim();

    if (!emailRegex.test(trimmedEmail)) {
      throw new Error("Please enter valid Email!");
    }

    if (!passwordRegex.test(trimmedPass)) {
      throw new Error("Password must be at least 8 chars long!");
    }

    // NEW → checkbox validation
    if (!isChecked) {
      throw new Error("You must agree to Terms, Privacy Policy & Fees!");
    }

    return true;
  };

  /**
   * Handles login flow:
   * 1. Validate data
   * 2. Store user to localStorage
   * 3. Redirect to home
   */
  const loginHandler = async () => {
    try {
      validator(); // run all validations first

      const trimmedEmail = email.trim();
      const trimmedPass = password.trim();

      // Mock user object (placeholder for real backend auth)
      const user = { email:trimmedEmail, password: trimmedPass, isManager: true };

      // Save auth session
      localStorage.setItem("user", JSON.stringify(user));

      // Redirect to Home/Dashboard
      router.push("/");
    } catch (err) {
      toast.error(err.message); // show toaster error
    }
  };

  return (
    <div className="w-full box-border h-screen flex items-center">
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

      <div className="flex w-full h-full">
        <div className="md:w-7/12 w-full flex justify-center items-center">
          {/* Form Card Wrapper */}
          <div className=" md:w-7/12 w-11/12  mx-auto flex flex-col text-center py-3 px-10  rounded-3xl">
            <h1 className="text-4xl font-bold">Welcome Back</h1>
            <h3 className="text-sm mt-3">Sign Up For Free</h3>

            {/* Form Section */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                loginHandler();
              }}
              className="flex flex-col gap-4"
            >
              {/* Email Input */}
              <div className="text-left text-sm flex flex-col gap-1">
                <label>Email</label>
                <input
                  type="text"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="py-2.5 sm:py-3 px-4 block w-full text-black border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 bg-inputBox"
                />
              </div>

              {/* Password Input */}
              <div className="text-left text-sm flex flex-col gap-1">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2.5 sm:py-3 px-4 block w-full text-black border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 bg-inputBox"
                />
              </div>

              {/* Terms Checkbox */}
              <label className="cursor-pointer text-left text-sm flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                I agree to all Terms, Privacy Policy and fees
              </label>

              {/* Submit Button */}
              <button className="w-full text-sm rounded-2xl bg-[#8044fe] py-2 text-white cursor-pointer">
                Get Started
              </button>
            </form>

            <h2 className="font-medium text-xs mx-auto my-4">OR</h2>

            {/* Social Login Buttons */}
            <div className="flex flex-col gap-4">
              <button className="w-full text-sm border border-gray-500/40 rounded-2xl py-2 cursor-pointer flex justify-center items-center gap-1">
                <Image src={google} alt="google png" className="w-6 h-6" /> Sign
                in with Google
              </button>

              <button className="w-full text-sm border border-gray-500/40 rounded-2xl py-2 cursor-pointer flex justify-center items-center gap-1">
                <Image src={facebook} alt="facebook png" className="w-6 h-6" />
                Sign in with Facebook
              </button>

              <h4 className="text-sm">Already have an account? <span className="text-blue-500 cursor-pointer">Login</span></h4>
            </div>
          </div>
        </div>

        {/* Side Image Section */}
        <div className="md:w-5/12 md:h-full w-0 h-0">
          <Image
            src={one}
            alt="sideImage"
            className="w-full h-full object-cover bg-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
