import React from "react";
import TotalEarningsTop from "./TotalEarningsTop";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { subscriptionsData } from "@/common/constants";

const Subscriptions = () => {
  return (
    <div
      className="w-full h-[350px] relative overflow-hidden rounded-2xl flex flex-col justify-between shadow-xs transition-all
      bg-dashboard "
    >
      <TotalEarningsTop title="Subscriptions" />
      <div className="absolute inset-0  z-20  pt-40">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={subscriptionsData} >
            <Line dataKey={"value"} stroke="#f9781c" strokeWidth={2}/>
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Subscriptions;
