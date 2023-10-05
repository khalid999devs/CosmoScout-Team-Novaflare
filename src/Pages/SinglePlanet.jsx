import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SinglePlanet = () => {
  const { planetId } = useParams();
  const [planetInfo, setPlanetInfo] = useState({
    name: 'Mars',
  });

  return <div>{planetId}</div>;
};

export default SinglePlanet;
