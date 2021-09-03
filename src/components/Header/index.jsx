import './header.scss';
import React from 'react';
import Logo from '../Logo';
import UserMenu from '../UserMenu';

function Header() {
  return (
    <header className="header">
      <Logo />
      <UserMenu />
    </header>
  );
}

export default Header;
