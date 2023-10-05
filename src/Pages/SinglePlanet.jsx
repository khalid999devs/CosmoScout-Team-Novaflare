import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../Components/Planets/ProgressBar';
import Bg from '../Components/Bg';
import Buttons from '../Components/SinglePlanet/Buttons';

const SinglePlanet = () => {
  const { planetId } = useParams();
  const [planetInfo, setPlanetInfo] = useState({
    name: 'Mars',
    moons: [' Phobos', 'Deimos'],
    type: 'planet',
  });

  return (
    <div className='relative'>
      <Bg />
      <ProgressBar
        fromImg={'/Planets/earth.png'}
        toImg={'/Planets/mars.png'}
        day={'1'}
      />

      <div id='canvas-container relative' className='w-full min-h-screen'>
        <div className='absolute left-[10%] top-[14%] p-5'>
          <h1 className='text-white text-5xl'>{planetInfo.name || 'Mars'}</h1>
          <Buttons
            classes={'bg-primary-main ml-3 mt-1'}
            text={'About ' + planetInfo.name}
          />
        </div>

        {planetInfo.moons.length > 0 && (
          <div className='absolute moons-tile left-0 top-[80%] bg-gray-800 p-3 flex flex-rows flex-wrap justify-start align-start min-w-[150px] min-h-[100px] bg-opacity-40 backdrop-filter backdrop-blur-lg'>
            {planetInfo.moons.map((moon, value) => {
              return (
                <div key={value} className='w-[80px]'>
                  <img src='/Planets/mars.png' alt='' />
                </div>
              );
            })}
          </div>
        )}
        <canvas className='h-full w-full bg-[url(https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhY2UlMjBzdGFyc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)]'></canvas>
      </div>
    </div>
  );
};

export default SinglePlanet;
