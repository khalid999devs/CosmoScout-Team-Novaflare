import React from 'react';

const TripPack = ({ placeName, shortDesc, Date }) => {
  return (
    <div className='p-2 py-5 pr-5 max-w-xs w-80 flex gap-1 flex-col hover:scale-105 transition-transform bg-orange-300 bg-opacity-60 backdrop-filter backdrop-blur-lg '>
      <div className='flex justify-end items-end text-white flex-col text-right'>
        <h1 className='text-xl font-medium'>package</h1>
        <h1 className='text-xl font-light'>Offer</h1>
      </div>
      <div>
        <h1 className='text-primary-dashText text-xl font-medium'>
          {placeName || 'Olympus Mons, Mars'}
        </h1>
        <p className='text-primary-dashText text-sm'>
          {shortDesc || 'Highest mountain of the solar system'}
        </p>
        <p className='text-primary-dashText text-xs'>{Date || '20/10/2050'}</p>
      </div>
    </div>
  );
};

export default TripPack;
