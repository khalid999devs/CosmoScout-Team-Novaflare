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
import { data } from '../assets/planetInfo';

const SingleMoon = () => {
  let { moonId } = useParams();
  const location = useLocation();
  const [targetSpot, setTargetSpot] = useState('');

  const [planetInfo, setPlanetInfo] = useState(
    data.find((single) => {
      const targetMoon = single.moons.filter((moon) => moon.value === moonId);
      if (targetMoon.length > 0) return single;
    }) || {}
  );

  const [moonInfo, setMoonInfo] = useState(
    planetInfo.moons.find((moon) => moon.value === moonId) || {}
  );

  useEffect(() => {
    setMoonInfo((moonInfo) => {
      return planetInfo.moons.find((moon) => moon.value === moonId);
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
          moonInfo={moonInfo.value}
          currentMoon={moonId}
        />

        <ControlSphere
          setPopUp={setPopUp}
          details={moonInfo}
          setTargetSpot={targetSpot}
        ></ControlSphere>
      </div>
      {popUp && (
        <Spot
          setPopUp={setPopUp}
          details={moonInfo}
          setConfirmPop={setConfirmPop}
        />
      )}
      {confirmPop && (
        <ConfirmPop
          setConfirmPop={setConfirmPop}
          details={moonInfo}
          planet={{ name: moonId, id: moonId }}
        />
      )}
    </div>
  );
};

export default SingleMoon;
