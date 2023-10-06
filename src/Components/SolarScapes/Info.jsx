import React from 'react';

const Info = ({ position, item, color, classes, highlight }) => {
  return (
    <div
      className={`absolute flex flex-col ${
        position === 'right'
          ? 'justify-end items-end'
          : 'justify-start items-start'
      } gap-1 ${position === 'right' ? 'text-right' : 'text-left'} ${classes}`}
    >
      <h1
        style={{
          background: highlight,
        }}
        className={` px-3 text-white text-xl `}
      >
        {item.title}
      </h1>
      <p className='text-white text-xs'>{item.desc}</p>
    </div>
  );
};

export default Info;
