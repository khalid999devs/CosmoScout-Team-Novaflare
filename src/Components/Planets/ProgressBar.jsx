import Search from '../Dashboard/Search';
import ActionButtons from '../Dashboard/ActionButtons';
import FromTo from './FromTo';

const ProgressBar = ({ fromImg, toImg, day }) => {
  return (
    <div
      className='w-full grid'
      style={{
        gridTemplateColumns: '1fr 1.5fr 1.3fr .7fr',
      }}
    >
      <Search height='full' width={'full'} />
      <ActionButtons
        text={"Let's prepare the itinerary"}
        hoverable={false}
        pr={'pr-14'}
        classes='w-full'
      />
      <FromTo fromImg={fromImg} toImg={toImg} />
      <div
        className='flex justify-center items-center text-xl text-white'
        style={{
          backgroundImage:
            ' linear-gradient(to bottom right, #161010,#CD8874 )',
        }}
      >
        Day {day || '1'}
      </div>
    </div>
  );
};

export default ProgressBar;
