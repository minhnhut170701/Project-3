import React from 'react'

const Mahogany = () => {
  return (
    <div className='p-6 border rounded-md mt-[24px] mb-[48px]'>
        {/* header */}
        <div className='flex justify-between items-center'>
          <h1 className='text-header-disible text-blue-200'>Mahogany Special Edition</h1>
          <p className=' text-[#71c0bb]'>Pledge $200 or more</p>
        </div>
        {/* infor */}
        <p className='pt-[24px] text-p-disible'>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
        {/* check */}
        <div className='flex items-center justify-between pt-[24px]'>
          <h2 className='text-header-disible'>0<span className='text-p ml-2'>left</span></h2>
          <button className='rounded-[33.5px] border p-4 bg-gray-500 text-white font-bold leading-5 text-sm cursor-default'>Out of stock</button>
        </div>
    </div>
  )
}

export default Mahogany