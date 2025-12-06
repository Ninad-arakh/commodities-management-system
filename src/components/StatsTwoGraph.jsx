import React from 'react'
import StatsGraph from './StatsGraph'

const StatsTwoGraph = () => {
  return (
    <div className='grid grid-cols-12 gap-3 mt-7 '> 
        <div className='col-span-4 rounded-xl bg-dashboard p-7 relative'>
            <StatsGraph stroke={"#23a952"} />
        </div>
        <div className='col-span-4 rounded-xl bg-dashboard p-7 relative'>
            <StatsGraph stroke={"#773ac5"} />
        </div>
        <div className='col-span-4 rounded-xl bg-dashboard p-7 relative'>
            <StatsGraph stroke={"#ffa800"} />
        </div>
        <div className='col-span-4 rounded-xl bg-dashboard p-7'>
            {/* <StatsGraph /> */}
        </div>
        <div className='col-span-4 rounded-xl bg-dashboard p-7'>
            {/* <StatsGraph /> */}
        </div>
        <div className='col-span-4 rounded-xl bg-dashboard p-7'>
            {/* <StatsGraph /> */}
        </div>
    </div>
  )
}

export default StatsTwoGraph