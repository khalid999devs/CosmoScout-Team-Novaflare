import React from 'react';

const Confirm = () => {
  return (
    <div className='flex flex-row justify-end items-center w-full p-4'>
      <button
        className='flex justify-center items-center py-2 px-12 text-xl text-white hover:scale-105 transition-transform'
        style={{
          backgroundImage: ' linear-gradient(to bottom right,#1F5B45,#41DBB1 )',
        }}
      >
        Confirm
      </button>
    </div>
  );
};

export default Confirm;
