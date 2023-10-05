const FromTo = ({ fromImg, toImg }) => {
  return (
    <div
      className='p-2 bg-primary-darkDash'
      style={{
        display: 'grid',
        gridTemplateColumns: '40px 1fr 40px',
        placeItems: 'center',
      }}
    >
      <img src={fromImg || '/Planets/earth.png'} alt='' />
      <p className='text-white text- text-center'>To</p>
      <img src={toImg || '/Planets/mars.png'} alt='' />
    </div>
  );
};

export default FromTo;
