import React from 'react';
import Logo from '../Components/LandingPage/Logo';
import PlanetBg from '../Components/LandingPage/PlanetBg';
import SearchBar from '../Components/LandingPage/SearchBar';
import SolarScapes from '../Components/LandingPage/SolarScapes';
import { SolarScapes as ScapesPage } from './SolarScapes';
import LoginButton from '../Components/LandingPage/LoginButton';
import RightText from '../Components/LandingPage/RightText';

const LandingPage = () => {
  return (
    <div className='h-screen mx-8 lg:mx-16 relative'>
      <div className='h-screen flex items-end justify-center '>
        <div className='mx-16 grid place-items-end '>
          <Logo />
          <PlanetBg />
        </div>
      </div>

      <div className='h-screen absolute top-0 left-0 w-full flex flex-col justify-between'>
        <div
          className='flex flex-col justify-between h-3/7 w-full '
          style={{ paddingBottom: '3%' }}
        >
          <LoginButton />
          <div className='flex w-full justify-end pr-0'>
            <RightText />
          </div>
        </div>

        <div className='flex w-full justify-start align-top fixed left-0 bottom-0'>
          <SolarScapes />
          <SearchBar />
        </div>
      </div>

      <ScapesPage />
    </div>
  );
};

export default LandingPage;
