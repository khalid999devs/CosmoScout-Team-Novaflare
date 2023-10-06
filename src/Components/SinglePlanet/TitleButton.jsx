import { GrCircleInformation } from 'react-icons/gr';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Buttons from './Buttons';
import { useNavigate } from 'react-router-dom';

const TitleButton = ({ planetInfo, moonInfo, planetID, moonMode = false }) => {
  const navigate = useNavigate();
  return (
    <div className='absolute left-[10%] top-[14%] p-5'>
      <h1 className='text-white text-5xl'>
        {!moonMode ? planetInfo.name : moonInfo.name}
      </h1>
      {!moonMode ? (
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
      ) : (
        <Buttons
          classes={'bg-primary-main ml-3 mt-1'}
          text={'Back to ' + planetInfo.name}
          textCol={'text-primaryText'}
          icon={'/Home/searchIcon.png'}
          iconComp={<AiOutlineArrowLeft />}
          onClick={() => {
            navigate(`/planets/${planetID}`);
          }}
        />
      )}
    </div>
  );
};

export default TitleButton;
