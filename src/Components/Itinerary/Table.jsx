import React from 'react';
import { contextConsumer } from '../../App';

const Table = () => {
  const {
    user: { itinerary },
    setUser,
  } = contextConsumer();
  console.log(itinerary);
  const rows = itinerary ? Object.keys(itinerary) : [];

  return (
    <div className='w-[94%] m-auto grid gap-y-1'>
      <div className='grid grid-cols-8 gap-1 '>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>Days</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>1</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>2</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>3</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>4</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>5</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>6</p>
        </div>
        <div className=' h-full bg-opacity-60 py-2 px-3 backdrop-filter backdrop-blur-lg bg-primary-dashBoard'>
          <p className='text-white text-lg'>7</p>
        </div>
      </div>
      {rows.map((row, value) => {
        return (
          <div key={value} className='grid grid-cols-8 gap-1 '>
            <div
              className={`h-full bg-opacity-60 py-3.5 px-3 backdrop-filter backdrop-blur-lg bg-primary-${
                value % 2 === 0 ? 'dashBoard' : 'darkDash'
              }`}
            >
              <p className='text-white text-lg'>{itinerary[row].title}</p>
            </div>

            {itinerary[row].items.map((item, value) => {
              return (
                <div
                  key={value}
                  className={`text-center h-full bg-opacity-60 py-3.5 px-3 backdrop-filter backdrop-blur-lg bg-primary-${
                    value % 2 === 0 ? 'dashBoard' : 'darkDash'
                  }`}
                >
                  <p className='text-white text-md'>{item}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
