"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

/**
 * Root Redirect Page
 * Decides which dashboard to route users to based on their role.
 * Performs a lightweight client-side auth check using localStorage.
 */
const page = () => {
  const router = useRouter();

  useEffect(() => {
    /**
     * Runs once on mount.
     * Uses localStorage to determine:
     *  - if the user is logged in
     *  - whether the user is a manager or keeper
     * Redirects accordingly.
     */
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const userObj = JSON.parse(storedUser);

      if (userObj) {
        // Role-based redirection
        userObj.isManager ? router.push("/dashboard") : router.push("/keeper");
      } else {
        // No session present → send to login page
        router.push("/login");
      }
    }
  }, []);

  return (
    <div>
      {/* Empty placeholder — page exists only for routing logic */}
      <h2 className=""></h2>
    </div>
  );
};

export default page;
