import React from 'react';

const Buttons = ({ text, icon, classes }) => {
  return (
    <div
      className={
        `w-fit px-2 h-max transition-transform bg-primary-dashBoard bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-center items-center` +
        ` ${classes}`
      }
    >
      <div className='flex flex-row gap-1 justify-center items-center p-2 py-3'>
        <div className='w-6'>
          <img
            src={icon || '/Dashboard/search.png'}
            alt='icon'
            width={'100%'}
          />
        </div>

        <h1 className='bg-transparent outline-none placeholder:text-white text-white text-lg'>
          {text || 'Button'}
        </h1>
      </div>
    </div>
  );
};

export default Buttons;
