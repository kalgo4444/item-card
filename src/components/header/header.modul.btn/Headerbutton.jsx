import { BsFileEarmarkPlusFill } from 'react-icons/bs';

const Headerbutton = () => {
  return (
    <button
      type="button"
      className="px-7 py-3 border-2 rounded-2xl cursor-pointer text-3xl text-white hover:bg-white hover:text-green-500 duration-300"
    >
      <BsFileEarmarkPlusFill />
    </button>
  );
};

export default Headerbutton;
