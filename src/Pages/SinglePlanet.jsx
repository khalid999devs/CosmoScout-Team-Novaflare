import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProgressBar from '../Components/Planets/ProgressBar';
import Bg from '../Components/Bg';
import TitleButton from '../Components/SinglePlanet/TitleButton';
import MoonsPanel from '../Components/SinglePlanet/MoonsPanel';
import ControlSphere from '../Components/SinglePlanet/ControlSphere';
import Spot from '../Components/SinglePlanet/Spot';
import ConfirmPop from '../Components/SinglePlanet/ConfirmPop';
import { data } from '../assets/planetInfo';

const SinglePlanet = () => {
  const { planetId } = useParams();
  const [popUp, setPopUp] = useState(false);
  const [confirmPop, setConfirmPop] = useState(false);
  const [planetInfo, setPlanetInfo] = useState(
    data.find((single) => single.value === planetId) || {}
  );
  const [targetSpot, setTargetSpot] = useState('');

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

        <ControlSphere
          setPopUp={setPopUp}
          setPlanetInfo={setPlanetInfo}
          details={planetInfo}
          setTargetSpot={setTargetSpot}
        ></ControlSphere>
      </div>
      {popUp && (
        <Spot
          details={planetInfo.spots.find((spot) => spot.value === targetSpot)}
          setPopUp={setPopUp}
          setConfirmPop={setConfirmPop}
        />
      )}
      {confirmPop && (
        <ConfirmPop
          details={planetInfo.spots.find((spot) => spot.value === targetSpot)}
          setConfirmPop={setConfirmPop}
          planet={{ name: planetInfo.name, id: planetId }}
        />
      )}
    </div>
  );
};

export default SinglePlanet;
