import React from 'react';

const Search = ({ classes, width, height = 'max' }) => {
  return (
    <div
      className={
        `w-${
          width || 'min'
        } pl-2 h-${height} transition-transform bg-primary-dashBoard bg-opacity-60 backdrop-filter backdrop-blur-lg ` +
        ` ${classes}`
      }
    >
      <div className='flex flex-row gap-1 w-64 justify-start items-center p-2 py-3'>
        <div className='w-6'>
          <img src='/Dashboard/search.png' alt='icon' width={'100%'} />
        </div>

        <input
          type='text'
          placeholder={'Search'}
          className='bg-transparent outline-none placeholder:text-white text-white text-lg'
        />
      </div>
    </div>
  );
};

export default Search;
