
const SelectButton = ({ children,  onClick }) => {
 

  return (
    <span onClick={onClick} className=' cursor-pointer rounded m-4 text-center text-white bg-indigo-600 border-yellow-500 py-3 px-4 hover:bg-yellow-500 hover:border-indigo-600 hover:text-black'>
      {children}
    </span>
  );
};

export default SelectButton;