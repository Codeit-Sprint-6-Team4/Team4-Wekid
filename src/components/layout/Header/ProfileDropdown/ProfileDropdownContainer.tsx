import React, { useState } from 'react';
import useHeaderDropdown from '../HeaderDropdown/useHeaderDropdown';
import ProfileDropdownUI from './ProfileDropdownUI';

const ProfileDropdownContainer: React.FC = () => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown(); // ref 포함

  // Context API 생성 후 수정 필요
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ProfileDropdownUI
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      isLoggedIn={isLoggedIn}
      handleLogout={handleLogout}
      dropdownRef={dropdownRef} // ref 전달
    />
  );
};

export default ProfileDropdownContainer;
