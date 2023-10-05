const Food = ({ img }) => {
  return (
    <div className='w-36 cursor-pointer hover:scale-105 transition-transform'>
      <img src={img || '/Dashboard/food.png'} alt='' />
    </div>
  );
};

export default Food;
