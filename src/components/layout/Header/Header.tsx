// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@assets/images/logo.svg';
import HamburgerContainer from './Hamburger/HamburgerContainer';
import {
  StyledHeaderWrap,
  StyledRightSide,
  StyledLoginButton,
  StyledLoginButtonSample,
  StyledMenu,
  StyledHamburger,
} from './HeaderUI.styled';
import Nav from './Nav/NavUI';
import NotificationsDropdownContainer from './NotificationsDropdown/NotificationsDropdownContainer';
import ProfileDropdownContainer from './ProfileDropdown/ProfileDropdownContainer';

interface HeaderProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  handleLogin,
  handleLogout,
}) => {
  return (
    <header>
      <StyledHeaderWrap>
        {/* 로고 */}
        <h1>
          <Link to="/">
            <img src={logoImg} alt="로고" />
          </Link>
        </h1>

        {/* 메뉴 */}
        <Nav />

        {/* 우측 버튼 모음 */}
        <StyledRightSide>
          {isLoggedIn ? (
            <StyledMenu>
              <NotificationsDropdownContainer />
              <ProfileDropdownContainer handleLogout={handleLogout} />
            </StyledMenu>
          ) : (
            <>
              <StyledLoginButton to="/login">로그인</StyledLoginButton>
              <StyledLoginButtonSample onClick={handleLogin}>
                로그인 테스트
              </StyledLoginButtonSample>
            </>
          )}
          <StyledHamburger>
            <HamburgerContainer />
          </StyledHamburger>
        </StyledRightSide>
      </StyledHeaderWrap>
    </header>
  );
};

export default Header;
