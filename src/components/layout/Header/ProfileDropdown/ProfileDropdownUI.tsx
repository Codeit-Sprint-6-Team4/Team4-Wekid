import React from 'react';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '@assets/icons/icon-profile.svg';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdownUI';
import { StyledMyMenu, StyledMyMenuItem } from './ProfileDropdownUI.styled';
import { userType } from '@api/user'; // userType을 임포트합니다.

interface ProfileDropdownUIProps {
  isOpen: boolean;
  handleToggleDropdown: () => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
  dropdownRef: React.Ref<HTMLDivElement>;
  user: userType | null;
}

const ProfileDropdownUI: React.FC<ProfileDropdownUIProps> = ({
  isOpen,
  handleToggleDropdown,
  isLoggedIn,
  handleLogout,
  dropdownRef,
  user,
}) => {
  return (
    <HeaderDropdown
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      buttonIcon={DefaultProfileImg}
      buttonIconAlt="프로필"
      ref={dropdownRef}
    >
      <StyledMyMenu>
        {user && user.profile ? (
          <StyledMyMenuItem>
            <Link to={`/wiki/${user.profile.code}`}>내 위키</Link>
          </StyledMyMenuItem>
        ) : (<StyledMyMenuItem>
          <Link to={`/mypage`}>내 위키</Link>
        </StyledMyMenuItem>)}
        <StyledMyMenuItem>
          <Link to="/mypage">마이페이지</Link>
        </StyledMyMenuItem>
        {isLoggedIn ? (
          <StyledMyMenuItem>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              로그아웃
            </Link>
          </StyledMyMenuItem>
        ) : null}
      </StyledMyMenu>
    </HeaderDropdown>
  );
};

export default ProfileDropdownUI;
