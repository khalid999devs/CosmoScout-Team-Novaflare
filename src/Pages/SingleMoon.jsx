import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProgressBar from '../Components/Planets/ProgressBar';
import Bg from '../Components/Bg';
import TitleButton from '../Components/SinglePlanet/TitleButton';
import MoonsPanel from '../Components/SinglePlanet/MoonsPanel';
import ControlSphere from '../Components/SinglePlanet/ControlSphere';
import Spot from '../Components/SinglePlanet/Spot';
import ConfirmPop from '../Components/SinglePlanet/ConfirmPop';
import { contextConsumer } from '../App';

const SingleMoon = () => {
  let { moonId } = useParams();
  const location = useLocation();
  const [planetInfo, setPlanetInfo] = useState({
    name: 'Mars',
    value: 'mars',
    moons: ['Phobos', 'Deimos'],
    type: 'planet',
  });
  const [moonInfo, setMoonInfo] = useState({
    name: moonId,
    type: 'moon',
  });

  useEffect(() => {
    setMoonInfo((moonInfo) => {
      return { ...moonInfo, name: moonId };
    });
  }, [location.pathname]);

  const [popUp, setPopUp] = useState(false);
  const [confirmPop, setConfirmPop] = useState(false);

  return (
    <div className='relative'>
      <Bg />
      <ProgressBar
        fromImg={'/Planets/earth.png'}
        toImg={'/Planets/mars.png'}
        day={'1'}
      />

      <div id='canvas-container relative' className='w-full min-h-screen'>
        <TitleButton
          planetInfo={planetInfo}
          moonInfo={moonInfo}
          planetID={planetInfo.value}
          moonMode={true}
        />
        <MoonsPanel
          planetInfo={planetInfo}
          moonInfo={moonInfo}
          currentMoon={moonId}
        />

        <ControlSphere setPopUp={setPopUp}></ControlSphere>
      </div>
      {popUp && <Spot setPopUp={setPopUp} setConfirmPop={setConfirmPop} />}
      {confirmPop && (
        <ConfirmPop
          setConfirmPop={setConfirmPop}
          planet={{ name: moonId, id: moonId }}
        />
      )}
    </div>
  );
};

export default SingleMoon;
