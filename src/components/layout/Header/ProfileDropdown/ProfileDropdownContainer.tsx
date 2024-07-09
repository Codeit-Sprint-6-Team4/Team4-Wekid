import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHeaderDropdown from '@hooks/useHeaderDropdown';
import ProfileDropdownUI from './ProfileDropdownUI';
import { useAuth } from '@context/authContext';

interface ProfileDropdownContainerProps {
  handleLogout: () => void;
}

const ProfileDropdownContainer: React.FC<ProfileDropdownContainerProps> = ({
  handleLogout,
}) => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown();
  const navigate = useNavigate();
  const { isLoggedIn, user } = useAuth(); // user를 가져옵니다.


  const logoutAndRedirect = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <ProfileDropdownUI
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      isLoggedIn={isLoggedIn}
      handleLogout={logoutAndRedirect}
      dropdownRef={dropdownRef}
      user={user}
    />
  );
};

export default ProfileDropdownContainer;
