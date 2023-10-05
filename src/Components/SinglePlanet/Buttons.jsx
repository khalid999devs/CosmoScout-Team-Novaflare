import React from 'react';

const Buttons = ({ text, icon, classes, textCol, onClick, iconComp }) => {
  return (
    <div
      className={
        `w-fit px-2 h-max hover:scale-105 cursor-pointer transition-transform bg-primary-dashBoard bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-center items-center ` +
        ` ${classes}`
      }
      onClick={onClick}
    >
      <div className='flex flex-row gap-1 justify-center items-center p-2 py-3'>
        <div className='w-6'>
          {iconComp || (
            <img
              src={icon || '/Dashboard/search.png'}
              alt='icon'
              width={'100%'}
            />
          )}
        </div>

        <h1
          className={`bg-transparent outline-none placeholder:text-white ${
            textCol || 'text-white'
          } text-lg`}
        >
          {text || 'Button'}
        </h1>
      </div>
    </div>
  );
};

export default Buttons;
