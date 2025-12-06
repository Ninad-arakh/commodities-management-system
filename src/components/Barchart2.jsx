import { chartData } from "@/common/constants";
import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";

const Barchart2 = () => {
  const barColor = "var(--subscriptionGraph)";
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-5 rounded-xl shadow bg-background z-999">
          <p className="">Month: {payload[0].payload.month}</p>
          <p className="text-subscriptionGraph">
            Value: {payload[0].payload.value}
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div
      className="w-full h-full relative overflow-hidden rounded-2xl  shadow-xs transition-all
      bg-dashboard"
    >
      <div className="z-20 absolute inset-0">
        <ResponsiveContainer width="100%" height={"100%"}>
          <BarChart
            data={chartData}
            margin={{ top: 0, right: 2, left: 2, bottom: 0 }}
          >
            <Bar dataKey="value" fill={barColor} radius={6} />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart2;
