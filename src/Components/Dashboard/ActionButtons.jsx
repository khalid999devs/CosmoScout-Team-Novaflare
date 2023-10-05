import { useNavigate } from 'react-router-dom';

const ActionButtons = ({
  icon,
  text,
  textBg = 'primary-main',
  textColor,
  pr,
  hoverable = true,
  classes = '',
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-row w-auto cursor-pointer ${
        hoverable ? 'hover:scale-105' : ''
      } transition-transform`}
      onClick={(_) => {
        navigate('/planets');
      }}
    >
      <div className='p-4 bg-white'>
        <img
          src={icon || '/Dashboard/novaflare.png'}
          alt='img'
          width={'30px'}
        />
      </div>
      <div
        className={`p-3 bg-${textBg} text-lg flex items-center pr-${
          pr || '20'
        } font-medium ${textColor || ''} ${classes}`}
      >
        {text || 'Action Button'}
      </div>
    </div>
  );
};

export default ActionButtons;
