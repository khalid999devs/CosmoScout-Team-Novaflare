import React from 'react';

const SearchBar = () => {
  return (
    <div className='bg-slate-100 min-w-56 w-56 h-max'>
      <div className='flex flex-row gap-1 w-3/4 justify-start items-center p-2 py-4'>
        <div className='w-6'>
          <img src='/Home/searchSVG.svg' alt='icon' width={'100%'} />
        </div>
        <h1 className='text-secondaryText text-optionSize'>
          <input
            type='text'
            placeholder={'Search'}
            className='bg-transparent outline-none'
          />
        </h1>
      </div>
    </div>
  );
};

export default SearchBar;
