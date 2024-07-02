import React from 'react';
import { Link } from 'react-router-dom';
import HamburgerImg from '@assets/icons/icon-menu.svg';
import HeaderDropdown from '../HeaderDropdown/HeaderDropdownUI';
import { StyledMyMenu, StyledMyMenuItem } from './HamburgerUI.styles';

interface HamburgerUIProps {
  isOpen: boolean;
  handleToggleDropdown: () => void;
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
  dropdownRef: React.Ref<HTMLDivElement>;
}

const HamburgerUI: React.FC<HamburgerUIProps> = ({
  isOpen,
  handleToggleDropdown,
  isLoggedIn,
  handleLogin,
  handleLogout,
  dropdownRef,
}) => {
  return (
    <HeaderDropdown
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      buttonIcon={HamburgerImg}
      buttonIconAlt="햄버거메뉴"
      ref={dropdownRef} // ref 전달
    >
      <StyledMyMenu>
        <StyledMyMenuItem>
          <Link to="/wekilist">위키목록</Link>
        </StyledMyMenuItem>
        <StyledMyMenuItem>
          <Link to="/boards">자유게시판</Link>
        </StyledMyMenuItem>

        {isLoggedIn ? (
          <>
            <StyledMyMenuItem>
              <Link to="/weki/:code">내 위키</Link>
            </StyledMyMenuItem>
            <StyledMyMenuItem>
              <Link to="/mypage">마이페이지</Link>
            </StyledMyMenuItem>
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
          </>
        ) : (
          <StyledMyMenuItem>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              로그인
            </Link>
          </StyledMyMenuItem>
        )}
      </StyledMyMenu>
    </HeaderDropdown>
  );
};

export default HamburgerUI;
