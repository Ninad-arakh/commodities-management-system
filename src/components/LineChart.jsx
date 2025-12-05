"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { earningsData } from "@/common/constants";
import TotalEarningsTop from "./TotalEarningsTop";

const linechart = () => {
  const CustomXAxisTick = ({ x, y, payload }) => {
    return (
      <text
        x={x}
        y={y + 10}
        textAnchor="middle"
        className="text-sm fill-foreground"
      >
        {payload.value}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-dashboard rounded-xl p-3 shadow">
          <p className="label text-semibold">{payload[0].value}</p>
          <p className="label text-[#21bb73]">Main: {payload[0].payload.main}</p>
          <p className="label text-[#21bb735f]">Secondary: {payload[0].payload.secondary}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div
      className="
      w-full h-[350px] relative overflow-hidden rounded-2xl  shadow-xs transition-all
      bg-dashboard 
      "
    >
      {/* ⚡ Alternating background bands */}
      <div className="absolute inset-0 z-10 grid grid-cols-12 pointer-events-none ">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`${
              i % 2 === 0
                ? "bg-linear-to-t from-grayBlock/70 to-transparent "
                : ""
            }`}
          ></div>
        ))}
      </div>

      <TotalEarningsTop title={"Total Earnings"} />

      {/* ⚡ Line Chart Layer */}
      <div className="absolute inset-0 z-20 p-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={earningsData}>
            <Line
              type={"monotone"}
              dataKey="main"
              stroke="#21bb73"
              strokeWidth={2}
            />

            <Line
              type={"monotone"}
              dataKey="secondary"
              stroke="#21bb735f"
              strokeWidth={2}
            />

            {/* <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              horizontal={true}
              className="opacity-40 dark:opacity-20"
            /> */}
            <XAxis
              dataKey="name"
              tick={<CustomXAxisTick />}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            {/* <Legend/> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default linechart;
