import React from 'react'

const Bambo = ({modal}) => {
  return (
    <div className='p-6 border rounded-md'>
        {/* header */}
        <div className='flex justify-between items-center'>
          <h1 className='text-[20px] font-bold'>Bamboo Stand</h1>
          <p className=' text-[#3CB3AB]'>Pledge $25 or more</p>
        </div>
        {/* infor */}
        <p className='pt-[24px] text-p'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
        {/* check */}
        <div className='flex items-center justify-between pt-[24px]'>
          <h2 className='text-[20px] font-bold'>101<span className='text-p ml-2'>left</span></h2>
          <button onClick={() => modal()}
          className='rounded-[33.5px] border p-4 bg-[#3CB3AB] 
          hover:bg-[#147A73] text-white font-bold leading-5 text-sm'>Select Reward</button>
        </div>
    </div>
  )
}

export default Bambo