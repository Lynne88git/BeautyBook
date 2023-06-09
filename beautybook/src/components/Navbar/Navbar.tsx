import React, { FC } from 'react';
import './Navbar.css';
import avatarImage from '../../../assets/images/avatar.png';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className="flex items-center justify-between p-4">
    <div className="flex items-center"></div>
    <div className="flex items-center">
      <img
        src={avatarImage}
        alt="Avatar"
        className="w-8 h-8 rounded-full mr-2"
      />
      <span className="pr-4">Welcome User</span>
    </div>
  </div>
);

export default Navbar;
