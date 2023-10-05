import Bg from '../Components/Bg';
import ProgressBar from '../Components/Planets/ProgressBar';
import Tile from '../Components/Planets/Tile';

const Planets = () => {
  return (
    <div className='min-h-screen w-auto relative '>
      <Bg />
      <ProgressBar />

      <div className='pt-16 px-8 lg:px-20 w-fit flex gap-3.5 flex-wrap flex-row justify-center items-center'>
        <Tile name={'Mars'} id={'mars'} />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
};

export default Planets;
