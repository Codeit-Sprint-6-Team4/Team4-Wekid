import React, { useState } from 'react';
import useHeaderDropdown from '../../../../hooks/useHeaderDropdown';
import ProfileDropdownUI from './ProfileDropdownUI';

interface ProfileDropdownContainerProps {
  handleLogout: () => void;
}

const ProfileDropdownContainer: React.FC<ProfileDropdownContainerProps> = ({
  handleLogout,
}) => {
  const { isOpen, handleToggleDropdown, dropdownRef } = useHeaderDropdown(); // ref 포함
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
