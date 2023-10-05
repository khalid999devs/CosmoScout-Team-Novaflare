import { GrCircleInformation } from 'react-icons/gr';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';

const TitleButton = ({ planetInfo, planetID }) => {
  const navigate = useNavigate();
  return (
    <div className='absolute left-[10%] top-[14%] p-5'>
      <h1 className='text-white text-5xl'>{planetInfo.name || 'Mars'}</h1>
      <Buttons
        classes={'bg-primary-main ml-3 mt-1'}
        text={'About ' + planetInfo.name}
        textCol={'text-primaryText'}
        icon={'/Home/searchIcon.png'}
        iconComp={<GrCircleInformation />}
        onClick={() => {
          navigate(`/scapes/${planetID}`);
        }}
      />
    </div>
  );
};

export default TitleButton;
