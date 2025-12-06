import React from 'react'
import TotalEarningsTop2 from './TotalEarningsTop2'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { StatsEarningData } from '@/common/constants'

const StatsGraph = ({stroke}) => {
    const CustomTooltip = ({active, payload}) => {
        if(active && payload && payload.length){
            return(
                <div className='p-4 rounded-xl shadow bg-background'>
                    <h4 className={`text-foreground`}>{payload[0].payload.date}</h4>
                    <h4 className={`text-[#773ac5]`}>Current:{payload[0].payload.current}</h4>
                    <h4 className={`text-[#555756]`}>Previous:{payload[0].payload.previous}</h4>
                </div>
            )
        }
        return null
    }
  return (
    <div className='relative h-[250px]'>
        <TotalEarningsTop2 title={"Total Earning"} />
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={StatsEarningData} margin={{ top: 70, right: 2, left: 2, bottom: 0 }}>
                <Line dataKey="current" strokeWidth={2} stroke={stroke}/>
                <Line dataKey="previous" strokeWidth={2} stroke="#555756"/>
                <XAxis dataKey="date"  tick={{ fill: "#aaa" }} />
                <YAxis domain={[0, 'dataMax']} hide />
                <Tooltip content={<CustomTooltip />}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default StatsGraph