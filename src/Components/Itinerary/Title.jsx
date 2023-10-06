import Search from '../Dashboard/Search';

const Title = () => {
  return (
    <div className='w-1/2 grid grid-cols-[1fr,7fr,2fr]'>
      <div className='bg-white grid place-items-center p-3'>
        <img src='/Dashboard/novaflare.png' alt='' />
      </div>
      <div
        className='flex justify-center items-center text-xl text-white'
        style={{
          backgroundImage:
            ' linear-gradient(to bottom right, #161010,#CD8874 )',
        }}
      >
        Check the itinerary
      </div>
      <Search height='full' width={'full'} />
    </div>
  );
};

export default Title;
