import React, {useState} from 'react';

//logo
import logo from "../../images/logo.svg";

//icon
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);


  const toggle = () =>{
    setShowMenu(!showMenu);
  }
  return (
    <nav className='max-w-6xl ml-auto mr-auto flex items-center justify-between p-4 pt-[48px] relative'>
        <img src={logo} alt="error" />
        <button onClick={() => toggle()} >
          <MenuIcon  fontSize='large' className='text-white cursor-pointer md:opacity-0'/>
        </button>
         
       {showMenu ? (
         <section className='absolute w-[300px] h-[300px] left-16 top-24 border right-full bg-white
         md:hidden'>
           <button onClick={() => setShowMenu(false)}
           className='absolute right-4 top-2'>X</button>
            <ul className='flex items-center space-y-6 mt-16 font-bold flex-col w-full'>
               <li className='hover:underline cursor-pointer border-b-2 w-full  p-2 '>About</li>
               <li className='hover:underline cursor-pointer border-b-2 w-full  p-2 '>Discover</li>
               <li className='hover:underline cursor-pointer border-b-2 w-full  p-2 '>Get Started</li>
           </ul>
         </section>

       ) : (
         <>
         </>
       )}
          
       
        <ul className='hidden items-center space-x-6 text-white md:flex'>
            <li className='hover:underline cursor-pointer'>About</li>
            <li className='hover:underline cursor-pointer'>Discover</li>
            <li className='hover:underline cursor-pointer'>Get Started</li>
        </ul>
    </nav>
         
  )
}

export default Header