const Bg = () => {
  return (
    <div
      className='h-full w-full absolute top-0 left-0'
      style={{
        backgroundImage: 'url(/Dashboard/dashboardBG.png)',
        backgroundPosition: 'center',
        backgroundOrigin: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: -1,
      }}
    ></div>
  );
};

export default Bg;
