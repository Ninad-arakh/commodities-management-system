import React from "react";
import TotalEarningsTop from "./TotalEarningsTop";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { earningsData2 } from "@/common/constants";

const Barchart = () => {
  const CustomeTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className=" bg-background px-5 py-4 rounded-xl shadow">
          <h2 className="text-lg">{payload[0].payload.name}</h2>
          <h2 className="text-sm text-green-500">
            Value : {payload[0].payload.value}
          </h2>
        </div>
      );
      return null;
    }
  };
  const barColor = "var(--statsGraph)";
  return (
    <div
      className="
      w-full h-[350px] relative overflow-hidden rounded-2xl  shadow-xs transition-all
      bg-dashboard 
      "
    >
      {/* ⚡ Alternating background bands */}
      <div className="absolute inset-0 z-10 grid grid-cols-8 pointer-events-none gap-2">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-linear-to-t from-grayBlock/70 to-transparent "
          ></div>
        ))}
      </div>
      <TotalEarningsTop title="Total Earnings" />

      <div className="absolute inset-0 z-20 ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={earningsData2}
            barCategoryGap="11%"
            margin={{ left: -2, right: -2 }}
          >
            <Bar dataKey="value" fill={barColor} radius={7} />
            <Tooltip content={<CustomeTooltip />} cursor={{fill:"transparent"}}/>
            {/* <XAxis dataKey={"name"}/> */}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
