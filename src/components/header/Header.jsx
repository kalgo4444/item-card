import { useState } from 'react';
import logo from '../../assets/images/title.svg';

const Header = () => {
  const [mode, setMode] = useState(false);

  return (
    <>
      <header
        className={`h-20 w-full flex items-center duration-300 ${mode ? 'bg-gray-950' : 'bg-green-500'}`}
      >
        <nav className="container mx-auto px-5 flex items-center justify-between">
          <div className="size-10">
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </div>
          <div>
            <button
              onClick={() => setMode(!mode)}
              className={`p-3 border-2 font-semibold rounded-2xl cursor-pointer ${mode ? ' bg-blue-500 text-white' : 'bg-white text-black'}`}
            >
              {mode ? 'White' : 'Dark'}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
