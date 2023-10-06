import { RxCross2 } from 'react-icons/rx';

const Spot = ({ setPopUp }) => {
  return (
    <div
      className='p-2 fixed bottom-0 left-[50%] min-h-[90vh] min-w-[500px] bg-opacity-60 backdrop-filter backdrop-blur-lg'
      style={{
        transform: 'translate(-50%,-0%)',
      }}
    >
      <div className='flex w-full px-3 justify-end items-center'>
        <RxCross2
          color='white'
          fontSize={'1.5rem'}
          style={{ cursor: 'pointer' }}
          onClick={(_) => setPopUp(false)}
        />
      </div>
      <div className='flex'></div>
    </div>
  );
};

export default Spot;
