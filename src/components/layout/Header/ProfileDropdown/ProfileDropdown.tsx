// ProfileDropdown.tsx
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DefaultProfileImg from '@assets/icons/icon-profile.svg';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdown';
import useHeaderDropdown from '../HeaderDropdown/useHeaderDropdown';

const ProfileDropdown: React.FC = () => {
  const { isOpen, dropdownRef, handleToggleDropdown } = useHeaderDropdown();

  // Context API 생성 후 수정 필요
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <HeaderDropdown
      dropdownRef={dropdownRef}
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      icon={DefaultProfileImg}
    >
      <StyledMyMenu>
        <StyledMyMenuItem>
          <Link to="weki/:code">내 위키</Link>
        </StyledMyMenuItem>
        <StyledMyMenuItem>
          <Link to="mypage">마이페이지</Link>
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

const StyledMyMenu = styled.ul`
  text-align: center;
`;

const StyledMyMenuItem = styled.li`
  padding: 1rem 1.6rem;

  & a {
    font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
    color: ${({ theme }) => theme.colors.gray[800]};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export default ProfileDropdown;

