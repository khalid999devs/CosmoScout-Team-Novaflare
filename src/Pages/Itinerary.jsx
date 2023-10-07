import React from 'react';

import Bg from '../Components/Bg';
import Title from '../Components/Itinerary/Title';
import Confirm from '../Components/Itinerary/Confirm';
import Table from '../Components/Itinerary/Table';
import { contextConsumer } from '../App';

const Itinerary = () => {
  const {
    user: { currentPlanet, userName },
  } = contextConsumer();
  return (
    <div className='flex flex-col pt-6 gap-6 w-full min-h-screen justify-between relative'>
      <Bg />
      <Title />
      <Table />
      <div></div>
      <Confirm currentPlanet={currentPlanet} name={userName} />
    </div>
  );
};

export default Itinerary;
