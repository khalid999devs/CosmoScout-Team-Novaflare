import Buttons from '../Components/SinglePlanet/Buttons';
import Info from '../Components/SolarScapes/Info';
import { data } from '../assets/planetInfo';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { CgArrowLeft, CgMoreR } from 'react-icons/cg';
import { RiGalleryFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import ScapeNav from '../Components/SolarScapes/scapeNav';

const SinglePlanetScape = ({ planetId = 'mars' }) => {
  const targetPlanet = data.find((single) => single.value === planetId);
  const navigate = useNavigate();

  const { name, scapes, threeImg, color, highlightColor } = targetPlanet;

  return (
    <div className='min-h-screen w-full relative' style={{ background: color }}>
      {scapes.one && (
        <Info
          item={scapes.one}
          position={'right'}
          color={color}
          highlight={highlightColor}
          classes={'top-[10%] left-[13%]'}
        />
      )}

      {scapes.two && (
        <Info
          item={scapes.two}
          position={'left'}
          color={color}
          highlight={highlightColor}
          classes={'top-[10%] left-[62%]'}
        />
      )}

      {scapes.three && (
        <Info
          item={scapes.three}
          position={'right'}
          color={color}
          highlight={highlightColor}
          classes={'top-[32%] left-[8%]'}
        />
      )}

      {scapes.four && (
        <Info
          item={scapes.four}
          position={'left'}
          color={color}
          highlight={highlightColor}
          classes={'top-[40%] left-[65%]'}
        />
      )}

      {scapes.five && (
        <Info
          item={scapes.five}
          position={'right'}
          color={color}
          highlight={highlightColor}
          classes={'top-[70%] left-[10%]'}
        />
      )}
      <div
        className='absolute w-[450px] top-[50%] left-[50%]'
        style={{
          transform: 'translate(-50%,-50%)',
        }}
      >
        <img
          src={threeImg || '/Planets/mars.png'}
          width={'100%'}
          alt='planet'
        />
      </div>

      {/* title */}
      <h1 className='text-white font-bold text-6xl top-[55%] absolute left-[25%] uppercase'>
        {name}
      </h1>

      <div className='grid grid-cols-2 max-w-[300px] w-[100%] gap-1 absolute bottom-[17%] right-[17%]'>
        <Buttons
          text={'Back to 3D View'}
          textSize={'xs'}
          iconComp={<CgArrowLeft />}
          classes={'w-full '}
          onClick={() => {
            navigate('/planets/mars');
          }}
        />
        <Buttons
          text={'Find Mineral'}
          textSize={'xs'}
          iconComp={<ImLocation />}
          classes={'w-full'}
        />
        <Buttons
          text={'Missions'}
          textSize={'xs'}
          iconComp={<CgMoreR />}
          classes={'w-full'}
        />
        <Buttons
          text={'Photo gallery'}
          textSize={'xs'}
          iconComp={<RiGalleryFill />}
          classes={'w-full'}
        />
      </div>
      <ScapeNav />
    </div>
  );
};

export default SinglePlanetScape;
