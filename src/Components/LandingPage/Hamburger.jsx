import { VscMenu, RxCross1 } from 'react-icons/md';

const Hamburger = ({ isOpen = false, setIsOpen }) => {
  return (
    <div className='p-3 transition-transform'>
      {!isOpen ? <VscMenu /> : <RxCross1 />}
    </div>
  );
};

export default Hamburger;
