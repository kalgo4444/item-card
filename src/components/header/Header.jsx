import React from 'react';
import logo from '../../assets/images/title.svg';
import Headerbutton from './header.modul.btn/Headerbutton';

const Header = () => {
  return (
    <>
      <header className="bg-green-500 text-t-white h-20 w-full flex items-center">
        <nav className="container mx-auto flex items-center justify-between">
          <div className="size-10">
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </div>
          <div>
            <Headerbutton />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
