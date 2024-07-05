import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logoImg from '@assets/images/logo.svg';
import HamburgerContainer from './Hamburger/HamburgerContainer';
import {
  StyledHeaderWrap,
  StyledRightSide,
  StyledLoginButton,
  StyledMenu,
  StyledHamburger,
} from './HeaderUI.styled';
import Nav from './Nav/NavUI';
import NotificationsDropdownContainer from './NotificationsDropdown/NotificationsDropdownContainer';
import ProfileDropdownContainer from './ProfileDropdown/ProfileDropdownContainer';

interface HeaderProps {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isLoggedIn,
  handleLogout,
}) => {
  return (
    <header>
      <StyledHeaderWrap>
        <h1>
          <Link to="/">
            <img src={logoImg} alt="로고" />
          </Link>
        </h1>

        <Nav />

        <StyledRightSide>
          {isLoggedIn ? (
            <StyledMenu>
              <NotificationsDropdownContainer />
              <ProfileDropdownContainer handleLogout={handleLogout} />
            </StyledMenu>
          ) : (
            <>
              <StyledLoginButton to="/login">로그인</StyledLoginButton>
            </>
          )}
          <StyledHamburger>
            <HamburgerContainer />
          </StyledHamburger>
        </StyledRightSide>
      </StyledHeaderWrap>
      <Outlet />
    </header>
  );
};

export default Header;
