import { useState } from 'react';

const Feedback = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const feedBack = { text, email };
    console.log(feedBack);
  };

  return (
    <div className='flex flex-col gap-4 p-3 bg-primary-dashBoard max-w-72 w-72'>
      <div className='flex flex-col gap-3'>
        <textarea
          name='TextArea'
          id='text-area'
          className='p-2 text-sm h-24 placeholder:text-gray-800 resize-none text-gray-800 outline-none bg-primary-darkDash'
          placeholder='feedback'
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <input
          type='text'
          placeholder='Email address'
          onChange={(e) => setEmail(e.target.value)}
          className='outline-none p-1.5 w-2/4  text-xs  resize-none text-gray-800 bg-primary-lightDash placeholder:text-gray-600'
        />
      </div>
      <div>
        <button
          onClick={(_) => handleSubmit()}
          className='bg-primary-lightDash p-1.5 px-5 text-white w-fit-content'
        >
          Submit
        </button>
      </div>

      <div>
        <p className='text-white'>Feedback form</p>
      </div>
    </div>
  );
};

export default Feedback;
