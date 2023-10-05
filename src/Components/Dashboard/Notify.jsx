const Notify = ({ icon, t1, t2 }) => {
  return (
    <div className='hover:scale-105 transition-transform cursor-pointer relative w-24 p-1 h-24 flex justify-start items-end  bg-primary-dashBoard bg-opacity-60 backdrop-filter backdrop-blur-lg'>
      <div
        className='w-6 absolute top-0 left-5'
        style={{
          transform: 'translate(-50%,-50%)',
        }}
      >
        <img src={icon || '/Dashboard/notify.png'} width={'100%'} alt='' />
      </div>
      <p className='text-white text-sm'>
        {t1 || 'Notifi'} <br />
        {t2 || 'cations'}
      </p>
    </div>
  );
};

export default Notify;
