import React from 'react';

//styles
import "./Price.styles.css"

const Price = ({price, percent, backer}) => {
  return (
    <div className='max-w-4xl h-auto bg-white mt-[24px] ml-auto mr-auto'>
        <div className='max-w-2xl ml-auto mr-auto p-10'>
            <section className='flex flex-col items-center justify-around text-center md:flex-row space-y-5'>
                <div>
                    <h2 className='text-header pb-[8px]'>$8648,5{price}</h2>
                    <p className='text-p'>of $100,000 backed</p>
                </div>
                <div>
                    <h2 className='text-header pb-[8px]'>5,00{backer}</h2>
                    <p className='text-p'>total backers</p>
                </div>
                <div>
                    <h2 className='text-header pb-[8px]'>56</h2>
                    <p className='text-p'>days left</p>
                </div>
            </section>

            <section className=' w-full bg-[#979797] h-[12px] mt-10 rounded-[33.5px]'>
                <div style={{width: `${percent}%`}}
                className='bg-[#3CB3AB] h-[12px] rounded-[33.5px]' ></div>
            </section>

        </div>
       
    </div>
  )
}

export default Price