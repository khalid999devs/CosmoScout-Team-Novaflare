import React from 'react';
import Logo from '../Components/LandingPage/Logo';
import PlanetBg from '../Components/LandingPage/PlanetBg';
import SearchBar from '../Components/LandingPage/SearchBar';
import SolarScapes from '../Components/LandingPage/SolarScapes';
import LoginButton from '../Components/LandingPage/LoginButton';
import RightText from '../Components/LandingPage/RightText';

const LandingPage = () => {
  return (
    <div className='h-screen mx-8 lg:mx-16 relative'>
      <div className='h-screen flex items-end '>
        <div className='mx-16 grid place-items-end '>
          <Logo />
          <PlanetBg />
        </div>
      </div>

      <div className='h-screen absolute top-0 left-0 w-full flex justify-between'>
        <div
          className='flex flex-col justify-between h-3/6 w-full '
          style={{ paddingBottom: '3%' }}
        >
          <LoginButton />
          <div className='flex w-full justify-end pr-0'>
            <RightText />
          </div>
        </div>

        <div
          className='flex flex-col justify-between h-3/6 w-full '
          style={{ paddingBottom: '3%' }}
        >
          <LoginButton />
          <div className='flex w-full justify-end pr-0'>
            <RightText />
          </div>
        </div>
      </div>
      <SearchBar />
      <SolarScapes />
    </div>
  );
};

export default LandingPage;
