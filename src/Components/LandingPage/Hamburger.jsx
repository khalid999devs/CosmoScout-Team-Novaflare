import { VscMenu } from 'react-icons/vsc';
import { RxCross1 } from 'react-icons/rx';

const Hamburger = ({ isOpen = false, setIsOpen }) => {
  return (
    <div
      className='p-2 absolute left-[-24%] top-[20%] hover:scale-105 transition-transform cursor-pointer bg-primary-main bg-opacity-60 backdrop-filter backdrop-blur-lg inline-block'
      onClick={() => setIsOpen(!isOpen)}
    >
      {!isOpen ? <VscMenu fontSize={'2rem'} /> : <RxCross1 fontSize={'2rem'} />}
    </div>
  );
};

export default Hamburger;
