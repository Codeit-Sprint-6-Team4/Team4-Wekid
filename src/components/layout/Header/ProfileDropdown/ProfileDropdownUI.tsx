import React from 'react';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '@assets/icons/icon-profile.svg';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import { StyledMyMenu, StyledMyMenuItem } from './ProfileDropdownFrame';

interface ProfileDropdownUIProps {
  isOpen: boolean;
  handleToggleDropdown: () => void;
  isLoggedIn: boolean;
  handleLogout: () => void;
  dropdownRef: React.Ref<HTMLDivElement>; // ref prop 추가
}

const ProfileDropdownUI: React.FC<ProfileDropdownUIProps> = ({
  isOpen,
  handleToggleDropdown,
  isLoggedIn,
  handleLogout,
  dropdownRef,
}) => {
  return (
    <HeaderDropdown
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      buttonIcon={DefaultProfileImg}
      buttonIconAlt="프로필"
      ref={dropdownRef} // ref 전달
    >
      <StyledMyMenu>
        <StyledMyMenuItem>
          <Link to="/weki/:code">내 위키</Link> {/* 절대 경로로 수정 */}
        </StyledMyMenuItem>
        <StyledMyMenuItem>
          <Link to="/mypage">마이페이지</Link> {/* 절대 경로로 수정 */}
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
