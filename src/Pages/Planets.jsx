import Bg from '../Components/Bg';
import ProgressBar from '../Components/Planets/ProgressBar';
import Tile from '../Components/Planets/Tile';
import { data } from '../assets/planetInfo';

const Planets = () => {
  const planetShort = data.map((single) => {
    return { name: single.name, id: single.value, img: single.threeImg };
  });

  return (
    <div className='min-h-screen w-auto relative '>
      <Bg />
      <ProgressBar
        fromImg={'/Planets/earth.png'}
        toImg={'Planets/mars.png'}
        day={'1'}
      />

      <div className='m-auto max-w-[1024px] pt-16 px-4 lg:px-20 w-fit flex gap-3.5 flex-wrap flex-row justify-center items-center'>
        {planetShort.map((planet) => {
          return <Tile name={planet.name} id={planet.id} />;
        })}
      </div>
    </div>
  );
};

export default Planets;
