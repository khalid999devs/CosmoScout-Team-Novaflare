import { useNavigate } from 'react-router-dom';
import Tile from '../Planets/Tile';

const ConfirmPop = ({ setConfirmPop, planet: { name, id }, details }) => {
  const navigate = useNavigate();
  return (
    <div className='p-2 fixed bottom-0 left-0 w-full h-screen bg-opacity-60 backdrop-filter backdrop-blur-lg flex flex-col justify-center items-center z-10 gap-6'>
      <div className='flex flex-row gap-12 relative'>
        <div
          className='h-[3px] w-[50px] bg-white absolute top-[50%] left-[50%] '
          style={{
            transform: 'translate(-50%,-50%)',
          }}
        ></div>
        <Tile name={name} id={id} noId={true} />
        <Tile name={details.name || 'spotName'} noImg={true} />
      </div>
      <h1 className='text-4xl text-white'>Shall We Confirm?</h1>
      <div className='flex flex-row gap-3'>
        <button
          className='py-1 px-10 bg-white w-fit text-lg'
          onClick={(_) => {
            setConfirmPop(false);
            navigate('/itinerary');
          }}
        >
          yes
        </button>
        <button
          className='py-1 px-10 bg-white  bg-opacity-80 backdrop-filter backdrop-blur-2xl w-fit text-secondaryText text-lg'
          onClick={(_) => setConfirmPop(false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ConfirmPop;
