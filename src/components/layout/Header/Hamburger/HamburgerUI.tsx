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
}

const HamburgerUI: React.FC<HamburgerUIProps> = ({
  isOpen,
  handleToggleDropdown,
  isLoggedIn,
  handleLogin,
  handleLogout,
}) => {
  return (
    <HeaderDropdown
      isOpen={isOpen}
      handleToggleDropdown={handleToggleDropdown}
      buttonIcon={HamburgerImg}
      buttonIconAlt="햄버거메뉴"
    >
      <StyledMyMenu>
        <StyledMyMenuItem>
          <Link to="/wekilist">위키목록</Link> {/* 절대 경로로 수정 */}
        </StyledMyMenuItem>
        <StyledMyMenuItem>
          <Link to="/boards">자유게시판</Link> {/* 절대 경로로 수정 */}
        </StyledMyMenuItem>

        {isLoggedIn ? (
          <>
            <StyledMyMenuItem>
              <Link to="/weki/:code">내 위키</Link> {/* 절대 경로로 수정 */}
            </StyledMyMenuItem>
            <StyledMyMenuItem>
              <Link to="/mypage">마이페이지</Link> {/* 절대 경로로 수정 */}
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
