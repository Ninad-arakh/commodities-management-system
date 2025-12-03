"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Invalid user JSON", e);
      }
    } else {
      router.push("/login");
    }
  }, []);
  return (
    <div>
      <h2 className=" "></h2>
    </div>
  );
};

export default page;
