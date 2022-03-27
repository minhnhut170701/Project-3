import React, {useState} from 'react';


//components
import Header from './Header';
import Infor from './Infor';
import Master from './Master';
import Modal from './Modal';
import Price from './Price';

const Home = () => {

  const [show, setShow] = useState(false);
  const [price, setPrice] = useState(0);
  const [percent, setPercent] = useState(30);
  const [backer, setBacker] = useState(7);
  const [bookmark, setBookmark] = useState(false)
  
  const openModal = () =>{
    setShow(true)
  };

  const getPrice = (event) =>{
    let val = event.target.value;
    setPrice(val);
  };
  const getPercent = () =>{
    setPercent(percent + 10)
  }
  const getBacked = () =>{
    setBacker(backer + 1)
  }

  return (
    <>
        <div className='bg-header-pattern h-[400px]'>
            <Header />
        </div>
        <div>
            <Master modal={openModal} show={bookmark} onClose={() => setBookmark(false)} onShow={() => setBookmark(true)}/>
            <Price price={price} percent={percent} backer={backer}  />
            <Infor modal={openModal} />
        </div>
        <Modal show={show} onClose={() => setShow(false)}  
          onPrice={(e) => getPrice(e)} onPercent={() => getPercent()}
          onBacked={() => getBacked()} />
    </>
    
    
  )
}

export default Home