import React from 'react';
import Bambo from './Bambo';
import Black from './Black';


//styles
import "./Infor.styles.css";
import Mahogany from './Mahogany';



//components
const Infor = ({modal}) => {
  return (
    <div className='max-w-4xl bg-white h-[1250px] mr-auto ml-auto mt-10'>
        <div className='max-w-2xl ml-auto mr-auto p-10 pt-[48px]'>
            <section>
                <h1 className='text-header text-left'>About this project</h1>
                <p className='text-p mt-[35px] pb-[20px]'>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
                <p className='text-p mt-[35px]'>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            </section>

            <section className='mt-[40px] text-left'>
                <Bambo modal={modal} />
                <Black modal={modal} />
                <Mahogany />
            </section>

        </div>
       
    </div>
  )
}

export default Infor