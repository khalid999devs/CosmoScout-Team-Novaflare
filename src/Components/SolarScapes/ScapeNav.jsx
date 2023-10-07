import { NavLink } from 'react-router-dom';
import { data } from '../../assets/planetInfo';

const ScapeNav = () => {
  const planets = data.map((single) => {
    return { name: single.name, value: single.value };
  });
  return (
    <div
      className='max-w-[80%] m-auto flex flex-row gap-3 text-white justify-center items-center absolute bottom-[0%] left-[50%]'
      style={{
        transform: 'translate(-50%,-50%)',
      }}
    >
      {planets.map((planet) => {
        return (
          <NavLink
            to={`/scapes/${planet.value}`}
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'text-orange-700' : ''
            }
            style={{
              fontSize: '0.9rem',
              color: 'white',
            }}
          >
            {planet.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default ScapeNav;
