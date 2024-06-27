import React, { useState } from 'react';
import useHeaderDropdown from '@hooks/useHeaderDropdown';
import HamburgerUI from './HamburgerUI';

const HamburgerContainer: React.FC = () => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <HamburgerUI
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      isLoggedIn={isLoggedIn}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
      dropdownRef={dropdownRef}
    />
  );
};

export default HamburgerContainer;
