import React from 'react';

const PlanetInfo = ({
  planetName = 'Mars',
  searchLocations = ['Olympus Mons', 'Valles Marineris'],
  titlePos = 'left',
}) => {
  return (
    <div className='flex flex-col pt-6 bg-primary-dashBoard w-full'>
      <div className='p-2 pr-3'>
        <h3
          className={'text-white text-sm leading-tight ' + 'text-' + titlePos}
        >
          Planet
        </h3>
        <h1 className={'text-white text-2xl leading-7 ' + 'text-' + titlePos}>
          {planetName}
        </h1>
      </div>

      <p className='py-2 text-center text-gray-800 text-xs bg-primary-darkDash'>
        Search Locations
      </p>

      <div className='px-1 pt-2 pb-8'>
        {searchLocations.map((spot, value) => {
          return (
            <p key={value} className='text-primary-dashText text-sm'>
              {spot}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetInfo;
