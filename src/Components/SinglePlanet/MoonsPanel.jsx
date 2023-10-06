import { useNavigate } from 'react-router-dom';

const MoonsPanel = ({ planetInfo, currentMoon }) => {
  const navigate = useNavigate();

  return (
    <>
      {planetInfo.moons.length > 0 && (
        <div className='fixed moons-tile left-0 bottom-[5%] bg-gray-800 p-1 flex flex-rows flex-wrap justify-start align-start max-w-[300px] min-h-[100px] bg-opacity-40 backdrop-filter backdrop-blur-lg gap-4 gap-y-1 py-5'>
          {planetInfo.moons
            .filter((moon) => moon !== currentMoon)
            .map((moon, value) => {
              return (
                <div
                  key={value}
                  onClick={(_) => {
                    navigate(`/moons/${moon}`);
                  }}
                  className='w-[80px]  hover:scale-105 transition-transform cursor-pointer'
                >
                  <img src='/Planets/mars.png' alt='' />
                  <p className=' text-center text-white  translate-y-[-50%]'>
                    {moon}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default MoonsPanel;
