import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHeaderDropdown from '@hooks/useHeaderDropdown';
import HamburgerUI from './HamburgerUI';
import { useAuth } from '@context/authContext';

const HamburgerContainer: React.FC = () => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown();
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutAndRedirect = () => {
    logout();
    navigate('/');
  };

  return (
    <HamburgerUI
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      isLoggedIn={isLoggedIn}
      handleLogout={handleLogoutAndRedirect}
      dropdownRef={dropdownRef}
    />
  );
};

export default HamburgerContainer;
