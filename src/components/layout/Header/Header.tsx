import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@assets/images/logo.svg';
import Hamburger from './Hamburger/Hamburger';
import {
  StyledHeaderWrap,
  StyledRightSide,
  StyledLoginButton,
  StyledLoginButtonSample,
  StyledMenu,
  StyledHamburger,
} from './HeaderFrame';
import Nav from './Nav/Nav';
import NotificationsDropdown from './NotificationsDropdown/NotificationsDropdown';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown';

interface HeaderProps {
  isLoggedIn: boolean;
  handleLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, handleLogin }) => {
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
              <NotificationsDropdown />
              <ProfileDropdown />
            </StyledMenu>
          ) : (
            <>
              <StyledLoginButton to="login">로그인</StyledLoginButton>
              <StyledLoginButtonSample onClick={handleLogin}>
                로그인 테스트
              </StyledLoginButtonSample>
            </>
          )}
          <StyledHamburger>
            <Hamburger />
          </StyledHamburger>
        </StyledRightSide>
      </StyledHeaderWrap>
    </header>
  );
};

export default Header;
