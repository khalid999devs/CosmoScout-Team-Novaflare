import { FiSettings } from 'react-icons/fi';

const Avatar = ({ name = 'Anne May' }) => {
  return (
    <div className='flex flex-row max-w-80 w-full max-h-40 bg-primary-dashBoard'>
      <div className='w-40'>
        <img src='/Dashboard/avatar.jpg' alt='avatar' width={'100%'} />
      </div>
      <div className='flex-1 flex flex-col justify-between p-2 lg:pr-32'>
        <div className='pt-5'>
          <p className='text-sm text-white opacity-70'>Welcome</p>
          <h1 className='text-3xl font-bold text-white'>{name}</h1>
        </div>
        <div className='text-white flex w-full justify-end items-center'>
          <FiSettings />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
