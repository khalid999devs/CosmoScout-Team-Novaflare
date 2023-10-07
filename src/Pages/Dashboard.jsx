import React from 'react';
import PlanetInfo from '../Components/Dashboard/PlanetInfo';
import Feedback from '../Components/Dashboard/Feedback';
import Logo from '../Components/Dashboard/Logo';
import Avatar from '../Components/Dashboard/Avatar';
import ActionButtons from '../Components/Dashboard/ActionButtons';
import Food from '../Components/Dashboard/Food';
import TripPack from '../Components/Dashboard/TripPack';
import Search from '../Components/Dashboard/Search';
import Notify from '../Components/Dashboard/Notify';
import Bg from '../Components/Bg';
import { contextConsumer } from '../App';

const Dashboard = () => {
  const { user } = contextConsumer();
  return (
    <div className='relative'>
      <Bg />
      <div className='min-h-screen max-w-[1300px] m-auto flex flex-row w-full relative'>
        <div className='flex flex-col gap-5 h-fit justify-between bg-primary-lightDash bg-opacity-60 backdrop-filter backdrop-blur-lg'>
          <h1 className='text-lg font-medium text-gray-600 pl-5'>Dashboard</h1>
          <div className='flex flex-col gap-2 pl-5 '>
            <div className='flex flex-row gap-1.5 relative pr-3'>
              <PlanetInfo />
              <PlanetInfo
                planetName='Venus'
                searchLocations={['Danilova', 'Aglaonice']}
                titlePos='right'
              />
              <div
                className='absolute w-16'
                style={{
                  top: '22%',
                  left: '48%',
                  transform: 'translate(-50%,-50%)',
                }}
              >
                <img src='/Dashboard/sunCloud.png' alt='' />
              </div>
            </div>
            <Feedback />
          </div>
          <Logo />
        </div>

        <div className='flex flex-row w-full justify-between'>
          <div className='flex flex-col gap-8 pt-12 '>
            <Search />
            <div className='flex flex-col gap-8 p-8 pl-12'>
              <div className='flex flex-row gap-4'>
                <Notify />
                <Notify
                  icon={'/Dashboard/star.png'}
                  t1={'Favourite'}
                  t2={'spots'}
                />
              </div>
              <ActionButtons text={"Let's prepare next Itinerary"} />
              <ActionButtons
                textColor={'text-white'}
                text={'Previous trips'}
                textBg='primary-darkDash'
              />
            </div>
          </div>

          <div className='flex flex-col gap-4 pt-12'>
            <div className='flex flex-row justify-end pl-8'>
              <Avatar user={user} />
            </div>
            <div className='flex flex-row gap-4'>
              <Food />
              <Food img={'/Dashboard/health.png'} />
            </div>
            <div className='flex justify-start'>
              <TripPack />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
