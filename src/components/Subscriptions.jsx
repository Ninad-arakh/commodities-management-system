import React from "react";
import TotalEarningsTop from "./TotalEarningsTop";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { subscriptionsData } from "@/common/constants";

const Subscriptions = () => {

  const CustomTooltip = ({active, payload}) => {
        if(active && payload && payload.length){
            return(
                <div className='p-4 rounded-xl shadow bg-background'>
                    <h4 className={`text-foreground`}>Day: {payload[0].payload.name}</h4>
                    <h4 className={`text-[#f9781c]`}>Value: {payload[0].payload.value}</h4>
                </div>
            )
        }
        return null
    }


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
            <Tooltip cursor={{fill: "transparent"}} content={<CustomTooltip />}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Subscriptions;
