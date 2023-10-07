import { useNavigate } from 'react-router-dom';

const Confirm = ({ currentPlanet, name }) => {
  const navigate = useNavigate();
  return (
    <div className='flex gap-4 flex-row justify-end items-center w-full p-4'>
      <button
        className='flex justify-center items-center py-2 px-12 text-xl text-white hover:scale-105 transition-transform'
        style={{
          backgroundImage:
            ' linear-gradient(to bottom right, #161010,#CD8874 )',
        }}
        onClick={() => {
          navigate(`/planets/${currentPlanet}`);
        }}
      >
        Continue Selection
      </button>

      <button
        className='flex justify-center items-center py-2 px-12 text-xl text-white hover:scale-105 transition-transform'
        style={{
          backgroundImage: ' linear-gradient(to bottom right,#1F5B45,#41DBB1 )',
        }}
        onClick={() => {
          navigate(`/${name}/dashboard`);
        }}
      >
        Confirm
      </button>
    </div>
  );
};

export default Confirm;
