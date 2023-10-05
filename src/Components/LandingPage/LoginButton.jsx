import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className='px-12 py-3 mx-auto text-secondaryText text-optionSize font-bold bg-primary-main bg-opacity-60 backdrop-filter backdrop-blur-lg'
      style={{
        width: 'max-content',
      }}
      onClick={(_) => {
        navigate('/exUser/dashboard');
      }}
    >
      Log in
    </button>
  );
};

export default LoginButton;
