import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../Components/Planets/ProgressBar';
import Bg from '../Components/Bg';
import TitleButton from '../Components/SinglePlanet/TitleButton';
import MoonsPanel from '../Components/SinglePlanet/MoonsPanel';
import Sphere from '../Components/SinglePlanet/ControlSphere';
import ControlSphere from '../Components/SinglePlanet/ControlSphere';
import Spot from '../Components/SinglePlanet/Spot';
import ConfirmPop from '../Components/SinglePlanet/ConfirmPop';

const SinglePlanet = () => {
  const { planetId } = useParams();
  const [popUp, setPopUp] = useState(false);
  const [confirmPop, setConfirmPop] = useState(false);

  const [planetInfo, setPlanetInfo] = useState({
    name: 'Mars',
    moons: ['Phobos', 'Deimos'],
    type: 'planet',
  });

  return (
    <div className='relative'>
      <Bg />
      <ProgressBar
        fromImg={'/Planets/earth.png'}
        toImg={'/Planets/mars.png'}
        day={'1'}
      />

      <div id='canvas-container relative' className='w-full min-h-screen'>
        <TitleButton planetInfo={planetInfo} planetID={planetId} />
        <MoonsPanel planetInfo={planetInfo} />

        <ControlSphere setPopUp={setPopUp}></ControlSphere>
      </div>
      {popUp && <Spot setPopUp={setPopUp} setConfirmPop={setConfirmPop} />}
      {confirmPop && <ConfirmPop setConfirmPop={setConfirmPop} />}
    </div>
  );
};

export default SinglePlanet;
