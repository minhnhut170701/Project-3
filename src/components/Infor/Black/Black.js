import React from 'react';


const Black = ({modal}) => {
  return (
    <div className='p-6 border rounded-md mt-[24px]'>
        {/* header */}
        <div className='flex justify-between items-center'>
          <h1 className='text-[20px] font-bold'>Black Edition Stand</h1>
          <p className=' text-[#3CB3AB]'>Pledge $75 or more</p>
        </div>
        {/* infor */}
        <p className='pt-[24px] text-p'>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
        {/* check */}
        <div className='flex items-center justify-between pt-[24px]'>
          <h2 className='text-[20px] font-bold'>64<span className='text-p ml-2'>left</span></h2>
          <button onClick={() => modal()}
          className='rounded-[33.5px] border p-4 bg-[#3CB3AB] hover:bg-[#147A73] text-white font-bold leading-5 text-sm'>Select Reward</button>
        </div>
    </div>
  )
}

export default Black