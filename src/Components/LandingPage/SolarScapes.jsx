const SolarScapes = () => {
  return (
    <div className='flex flex-row gap-2 p-2 bg-primary-main bg-opacity-60 backdrop-filter backdrop-blur-lg pl-12 pb-6'>
      <div className='w-48 md:w-20'>
        <img src='/Home/solar.png' alt='solar' width={'100%'} />
      </div>
      <div className='pt-4 max-w-sm'>
        <div className='mb-4'>
          <h3
            className='text-2xl leading-3'
            style={{
              marginBottom: '2.5px',
            }}
          >
            Solar
          </h3>
          <h1 className='text-4xl leading-3 tracking-wide'>scapes</h1>
        </div>
        <p className='text-xs leading-5'>
          Our webapp showcases the unraveling mysterious universe with a
          beneficial point of view. he interactive interface will help user to
          simply login using his google account and feel the
        </p>
      </div>
    </div>
  );
};

export default SolarScapes;
