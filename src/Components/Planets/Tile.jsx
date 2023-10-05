import { useNavigate } from 'react-router-dom';

const Tile = ({ name, img, id }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: '180px' }}
      className='hover:scale-105 transition-transform cursor-pointer flex flex-col w-48 items-center justify-between overflow-hidden text-whitemax-w-xs  bg-primary-dashBoard bg-opacity-60 backdrop-filter backdrop-blur-lg'
      onClick={(_) => {
        navigate(`/planets/${id}`);
      }}
    >
      <h1 className='text-xl text-white text-center pt-4'>{name || 'Mars'}</h1>
      <div className='w-64 mt-4 '>
        <img
          src={img || '/Planets/mars.png'}
          style={{
            width: '200%',
          }}
          alt={name || 'planet'}
        />
      </div>
    </div>
  );
};

export default Tile;
