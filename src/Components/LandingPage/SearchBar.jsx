import React from 'react';

const SearchBar = () => {
  return (
    <div className='bg-slate-100 w-56'>
      <div className='flex flex-row gap-1 w-3/4 justify-start items-center p-2 py-4'>
        <div className='w-6'>
          <img src='/Home/searchSVG.svg' alt='icon' width={'100%'} />
        </div>
        <h1 className='text-secondaryText text-optionSize'>Search</h1>
      </div>
    </div>
  );
};

export default SearchBar;
