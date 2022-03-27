import React, {useState, useEffect} from 'react';

//styles
import "../../App.css";

//icons
import CheckIcon from '@mui/icons-material/Check';


const Modal = ({show, onClose, onPrice,onPercent, onBacked}) => {
    const [checkBambo, setCheckBambo] = useState(false);
    const [checkblack, setCheckblack] = useState(false);
    const [alert, setAlert] = useState(false);

    
    
    useEffect(() => {
        setCheckBambo(false)
        setAlert(false)
        setCheckblack(false)
    }, [])  
   

    if(!show){
        return null;
    }

   
    



    

    
  return (
    <div className='absolute z-40 left-0 right-0 bottom-0 top-0 bg-[#242424cc] 
   mix-blend-normal h-[2200px]'>
       {alert ? (
            
            <section className='md:w-[554px] w-[350px] bg-white h-auto pb-2 mr-auto ml-auto mt-40 text-black'>
                <div className='text-white  bg-[#3CB3AB] w-[100px] h-[100px] flex items-center
                ml-auto mr-auto relative top-10 rounded-full'>
                     <CheckIcon fontSize="large" className='ml-auto mr-auto'  />
                </div>
                <div className='p-10  text-center mt-10'>
                    <h1 className='text-header-modal'>Thanks for your support!</h1>
                    <p className='text-p-modal mt-4'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
                </div>
             <div className='w-[20%] ml-auto mr-auto border flex justify-center rounded-[20px]
              p-1 bg-[#3CB3AB] hover:bg-[#147A73]'>
                 <button onClick={() => {setAlert(false); onPercent(); onBacked()}}
                 className='text-white w-full p-2 '>
                     Got it
                 </button>
 
             </div>
               
            </section>
       ):
       (
        <section className='max-w-2xl bg-white  ml-auto mr-auto mt-20 '>
        <button onClick={onClose} 
                className='relative left-[90%] top-10'>
              X
            </button>
        <div className='p-20 w-auto'>
            
            <h1 className='text-header-modal'>Black this project</h1>
            <p className='text-p-modal'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
            <form  className='mt-[32px] space-y-6'>
                {/* select 1 */}
                <div className='flex space-x-6 border p-6 rounded-[10px]'>
                    <input type='radio' value='ple' name="drone" onChange={() => {setCheckBambo(false); setCheckblack(false)}} />
                    <aside className='-mt-1 space-y-6'>
                        <h2 className='font-bold text-[16px] leading-[20px] hover:text-[#3CB3AB]'>Pledge with no reward</h2>
                        <p className='font-normal text-[15px] leading-[28px] text-[#7A7A7A]'>Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
                    </aside>
                </div>

                 {/* select 2 */}
                 <div className='flex space-x-6 border p-6 rounded-[10px] hover:border-[#3CB3AB]'>
                    <input type='radio' onChange={() => {setCheckBambo(true); setCheckblack(false)}} value='bambo' name="drone" />
                    <section className='-mt-1 space-y-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-4'>
                                <h2 className='font-bold text-[16px] leading-[20px] hover:text-[#3CB3AB]'>Bamboo Stand</h2>
                                <p className='font-normal text-[15px] leading-[28px] text-[#3CB3AB]'>Pledge $25 or more</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <h2>101</h2>
                                <p>left</p>
                            </div>
                        </div>
                        <p className='font-normal text-[15px] leading-[28px] text-[#7A7A7A]'>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>
                        {checkBambo && (
                            <>
                             {/* check */}
                            <aside className='flex items-center justify-between border border-t-gray-500 
                                border-transparent pt-4 flex-wrap' >
                                    <h2 className='text-center'>Enter your pledge</h2>
                                    <div className='flex items-center space-x-3'>
                                        <div className='flex items-center space-x-2 rounded-[20px] 
                                            p-2 pl-5 border-2'>
                                            <p>$</p>
                                            <input type='number'  className='w-12' onChange={(e) => onPrice(e)} />
                                        </div>
                                        <button  onClick={() => setAlert(true)}
                                         className='p-2 bg-[#3CB3AB] text-white font-bold rounded-[20px]
                                        pl-5 pr-5 hover:bg-[#147A73]' >
                                            Countinue
                                        </button> 
                                    </div>
                            </aside>
                            </>
                           )}
                         
                    </section>

                </div>

                 {/* select 3 */}
                 <div className='flex space-x-6 border p-6 rounded-[10px]'>
                    <input type='radio' name="drone" onChange={() => {setCheckBambo(false); setCheckblack(true)}} />
                    <aside className='-mt-1 space-y-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-4'>
                                <h2 className='font-bold text-[16px] leading-[20px] hover:text-[#3CB3AB]'>Black Edition Stand</h2>
                                <p className='font-normal text-[15px] leading-[28px] text-[#3CB3AB]'>Pledge $75 or more</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <h2>64</h2>
                                <p>left</p>
                            </div>
                        </div>
                        <p className='font-normal text-[15px] leading-[28px] text-[#7A7A7A]'>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>
                        {checkblack && (
                            <>
                             {/* check */}
                            <aside className='flex items-center justify-between border border-t-gray-500 
                                border-transparent pt-4 flex-wrap' >
                                    <h2>Enter your pledge</h2>
                                    <div className='flex items-center space-x-3'>
                                        <div className='flex items-center space-x-2 rounded-[20px] 
                                            p-2 pl-5 border-2'>
                                            <p>$</p>
                                            <input type='number'  className='w-12' onChange={(e) => onPrice(e)} />
                                        </div>
                                        <button  onClick={() => setAlert(true)}
                                         className='p-2 bg-[#3CB3AB] text-white font-bold rounded-[20px]
                                        pl-5 pr-5 hover:bg-[#147A73]' >
                                            Countinue
                                        </button> 
                                    </div>
                            </aside>
                            </>
                           )}
                    </aside>
                </div>

                {/* select 4 */}
                <div className='flex space-x-6 border p-6 rounded-[10px] opacity-50'>
                    <input type='radio' disabled />
                    <aside className='-mt-1 space-y-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center space-x-4'>
                                <h2 className='font-bold text-[16px] leading-[20px]'>Mahogany Special Edition</h2>
                                <p className='font-normal text-[15px] leading-[28px] text-[#3CB3AB]'>Pledge $200 or more</p>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <h2>0</h2>
                                <p>left</p>
                            </div>
                        </div>
                        <p className='font-normal text-[15px] leading-[28px] text-[#7A7A7A]'>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included.</p>
                    </aside>
                </div>
            </form>
          
            </div>
        </section>  
       )}
       
    </div>
  )
}

export default Modal