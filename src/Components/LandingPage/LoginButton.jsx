import React from 'react';

const LoginButton = () => {
  return (
    <button
      className='px-8 py-3 mx-auto text-secondaryText bg-slate-100 text-optionSize font-bold'
      style={{
        width: 'max-content',
      }}
    >
      Log in
    </button>
  );
};

export default LoginButton;
