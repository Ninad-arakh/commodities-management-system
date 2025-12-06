import Image from 'next/image'
import React from 'react'

const ProductCommonComponent = ({img}) => {
  return (
    <div className='flex w-full px-3 items-center border-b border-gray-300'>
        {/* image */}
        <div className=''>
            <Image src={img} alt='Product img' className='w-14 h-10 p-2'/>
        </div>

        <div className='w-full flex justify-between'>
            {/* middle */}
        <div className='leading-tight'>
            <h3 className='text-sm'>arakhninad@gmail.com</h3>
            <p className='text-textGray text-xs'>06/12/2025</p>
        </div>

        {/* price */}
        <div className='flex items-center'>
            <h2 className='font-bold'>$100</h2>
        </div>
        </div>
    </div>
  )
}

export default ProductCommonComponent