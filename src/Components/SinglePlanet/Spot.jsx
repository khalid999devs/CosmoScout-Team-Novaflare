import { RxCross2 } from 'react-icons/rx';
import { contextConsumer } from '../../App';

const Spot = ({ setPopUp, setConfirmPop, details }) => {
  const { user } = contextConsumer();
  console.log(details);

  return (
    <div
      className='p-8 fixed bottom-0 flex justify-center items-center  left-[50%] min-h-[90vh] min-w-[500px] bg-opacity-60 backdrop-filter backdrop-blur-lg'
      style={{
        transform: 'translate(-50%,-0%)',
      }}
    >
      <div className='flex flex-row justify-start items-start gap-3'>
        <div className='flex-1 '>
          <img
            src={
              details.img ||
              'https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA00300.jpg'
            }
            alt={details.name}
            width={'100%'}
            height={'70%'}
          />
          <div className='flex flex-row w-full'>
            <div className='flex min-h-[40px] w-[80%] flex-col p-2 justify-center bg-primary-main bg-opacity-60 backdrop-filter backdrop-blur-lg'>
              <div className='m-w-[30px] h-full text-sm'>
                {details.weather.cel ? `${details.weather.cel} degree` : 'N/A'}
              </div>
              <div className='m-w-full h-full text-sm'>wind: medium</div>
            </div>
            <div className='flex gap-1 min-h-[40px] w-[80%] flex-row p-2 items-center bg-primary-dashBoard bg-opacity-60 backdrop-filter backdrop-blur-lg'>
              <div className='m-w-[30px] h-full font-medium uppercase p-1'>
                {details.entertainment || 'Entertainment'}
              </div>
            </div>
          </div>
        </div>
        <div className='flex-1 p-4 flex flex-col justify-between h-full pb-0 gap-10 pt-2 '>
          <div>
            <div className='flex flex-row gap-3 mb-2 w-full justify-start items-center text-white'>
              <RxCross2
                fontSize={'1.5rem'}
                className='bg-white text-black cursor-pointer hover:scale-105 transition-transform'
                onClick={(_) => setPopUp(false)}
              />
              <h1 className='text-3xl font-medium text-white'>
                {details.name || 'Spot Name'}
              </h1>
            </div>
            <div className='flex flex-row gap-3 w-full justify-start text-white text-sm'>
              {details.desc ||
                `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Libero, facere!`}
            </div>
            <div className='flex flex-col mt-5'>
              <h1 className='text-white text-md font-bold'>Your hotel</h1>
              <div className='flex flex-row gap-2'>
                <button className='bg-white text-black p-2'>
                  {details.hotelName || 'Hotel name'}
                </button>
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row justify-end items-center py-2 relative'>
            <button
              className='p-3 text-black bg-white px-6'
              style={{
                borderRadius: '10px 0 0 10px',
              }}
              onClick={() => {
                setPopUp(false);
                setConfirmPop(true);
              }}
            >
              Book this Spot
            </button>
            <div className='absolute bottom-[100%] right-[5%] h-[80px] w-[80px] rounded-full'>
              <img
                src={details.hostAvatar || '/Dashboard/avatar.jpg'}
                className='rounded-full'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spot;
