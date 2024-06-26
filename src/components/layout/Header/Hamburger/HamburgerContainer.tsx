import React, { useState } from 'react';
import useHeaderDropdown from '../HeaderDropdown/useHeaderDropdown';
import HamburgerUI from './HamburgerUI';

const HamburgerContainer: React.FC = () => {
  const { isOpen, handleToggleDropdown } = useHeaderDropdown();

  // Context API 생성 후 수정 필요
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
    />
  );
};

export default HamburgerContainer;
