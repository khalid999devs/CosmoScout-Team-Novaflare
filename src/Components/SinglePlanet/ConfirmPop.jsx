import React from 'react';

const ConfirmPop = ({ setConfirmPop }) => {
  return (
    <div className='p-2 fixed bottom-0 left-0 w-full h-screen bg-opacity-60 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center z-10 gap-6'>
      <div className='flex flex-col gap-4'>tile</div>
      <h1 className='text-4xl text-white'>Shall We Confirm?</h1>
      <div className='flex flex-row gap-3'>
        <button
          className='py-1 px-10 bg-white w-fit text-lg'
          onClick={(_) => setConfirmPop(false)}
        >
          yes
        </button>
        <button
          className='py-1 px-10 bg-white  bg-opacity-80 backdrop-filter backdrop-blur-2xl w-fit text-secondaryText text-lg'
          onClick={(_) => setConfirmPop(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmPop;
