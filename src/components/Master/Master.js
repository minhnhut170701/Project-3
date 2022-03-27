import React from 'react';

//styles
import "./Master.styles.css"

//logo
import logo from "../../images/logo-mastercraft.svg";
import bookmark from "../../images/icon-bookmark.svg";
import bookmarkActive from "../../images/icon-bookmark-active.svg";


const Master = ({modal, onClose, onShow, show
}) => {

   
  return (
    <div className='max-w-4xl mr-auto ml-auto -mt-[100px] rounded-[8px] border bg-white'>
        <img src={logo} alt="error" className='ml-auto mr-auto -mt-[30px]' />
        <section className='max-w-2xl  margin-center p-10'>
            <h1 className='text-header pb-[15px] '>Mastercraft Bamboo Monitor Riser</h1>
            <p className='text-p'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='mt-[40px] flex items-center justify-between'>
                <button onClick={() => modal()}
                className='rounded-[33.5px] border p-4 bg-[#3CB3AB] w-[600px] mr-4 text-white font-bold leading-5 md:w-[200px]
                hover:bg-[#147A73]'>
                    Back this project
                </button>
                {!show ? (
                     <aside className='flex items-center space-x-4 w-[174px] relative hover:opacity-75 cursor-pointer'>
                     <img src={bookmark} alt="error" className='-mr-[65px] relative z-10 '  />
                     <button onClick={() => onShow()}
                     className='rounded-[33.5px] border p-5  pr-6 leading-5 bg-[#B1B1B1] pl-14 md:opacity-100 opacity-0'>Bookmark</button>
                    </aside>


                ) :(
                    <aside className='flex items-center space-x-4 w-[174px] relative hover:opacity-75 cursor-pointer'>
                    <img src={bookmarkActive} alt="error" className='-mr-[65px] relative z-10'  />
                    <button onClick={() => onClose()}
                    className='rounded-[33.5px] border p-5 pl-14 pr-6 leading-5 bg-white text-[#147A73]'>Bookmark</button>
                    </aside>

                )}
               
                
               
            </div>
        </section>
    </div>
  )
}

export default Master