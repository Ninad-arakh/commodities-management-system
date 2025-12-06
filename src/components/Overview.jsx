import { overview } from "@/common/constants";
import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Overview = () => {
  const CustomeTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      // console.log("payload : ", payload);
      return (
        <div className=" bg-background px-5 py-4 rounded-xl shadow">
          <h2 className="text-lg">Month: {payload[0].payload.month}</h2>
          <h2 className="text-sm text-green-500">
            Value : {payload[0].payload.value}
          </h2>
        </div>
      );
      return null;
    }
  };
  const barColor = "var(--overviewGraph)";
  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-2xl  shadow-xs transition-all
      bg-dashboard "
    >
      <h1 className="text-lg px-4 py-4">Overview</h1>
      {/* ⚡ Alternating background bands */}
      <div className="absolute px-2 pl-[70px] py-12 inset-0 z-10 grid grid-cols-12 pointer-events-none gap-2">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="bg-linear-to-t from-grayBlock/70 to-transparent "
          ></div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 pt-12 pb-3">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart data={overview}>
            <Bar dataKey="value" fill={barColor} radius={4} />
            <Tooltip content={<CustomeTooltip />} cursor={{fill:"transparent"}} />
            <XAxis dataKey="month" />
            <YAxis />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
