import React from 'react';

import Bg from '../Components/Bg';
import Title from '../Components/Itinerary/Title';
import Confirm from '../Components/Itinerary/Confirm';
import Table from '../Components/Itinerary/Table';

const Itinerary = () => {
  return (
    <div className='flex flex-col pt-6 gap-6 w-full min-h-screen justify-between relative'>
      <Bg />
      <Title />
      <Table />
      <div></div>
      <Confirm />
    </div>
  );
};

export default Itinerary;
