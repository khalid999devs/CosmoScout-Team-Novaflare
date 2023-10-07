import React, { useState } from 'react';
import Hamburger from '../Components/LandingPage/Hamburger';
import { useNavigate } from 'react-router-dom';

const SolarScapes = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`fixed p-4 ${
        open ? 'right-[0%]' : 'left-[100%]'
      } top-0 w-[300px] h-full bg-primary-main bg-opacity-60 backdrop-filter backdrop-blur-lg flex flex-col justify-end transition-transform `}
    >
      <div className='p-2 w-full max-h-[250px] relative cursor-pointer'>
        <Hamburger isOpen={open} setIsOpen={setOpen} />
        <div
          onClick={() => {
            navigate('/scapes/mars');
          }}
          className='transition-transform hover:scale-105'
        >
          <h1 className='absolute text-white text-4xl top-[1%] left-3 font-medium transition-transform'>
            Solar
            <br />
            Scapes
          </h1>

          <img
            src='https://d2pn8kiwq2w21t.cloudfront.net/original_images/imagesspitzer20080115magell-browse.jpg'
            alt='nasa'
            width={'90%'}
          />
        </div>
      </div>
    </div>
  );
};

export { SolarScapes };
