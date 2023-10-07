import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MoonsPanel = ({ planetInfo, currentMoon }) => {
  const navigate = useNavigate();
  const { moonId } = useParams();

  const [panelMoons, setPanelMoons] = useState(planetInfo.moons);

  useEffect(() => {
    setPanelMoons(planetInfo.moons.filter((moon) => moon.value !== currentMoon));
  }, [currentMoon]);
  // if (currentMoon) {
  //   setPanelMoons(() => {
  //     return planetInfo.moons.filter((moon) => moon.value !== currentMoon);
  //   });
  // }
  console.log(panelMoons);

  return (
    <>
      {panelMoons.length > 0 && (
        <div className='fixed moons-tile left-0 bottom-[5%] bg-gray-800 p-1 flex flex-rows flex-wrap justify-start align-start max-w-[300px] min-h-[100px] bg-opacity-40 backdrop-filter backdrop-blur-lg gap-4 gap-y-1 py-5'>
          {panelMoons.map((moon, value) => {
            return (
              <div
                key={value}
                onClick={(_) => {
                  navigate(`/moons/${moon.value}`);
                }}
                className='w-[80px]  hover:scale-105 transition-transform cursor-pointer'
              >
                <img src='/Planets/mars.png' alt='' />
                <p className=' text-center text-white  translate-y-[-50%]'>
                  {moon.name}
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
