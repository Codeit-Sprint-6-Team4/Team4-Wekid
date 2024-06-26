// Header
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '@assets/images/logo.svg';
import { media } from '@utils/media';
import Hamburger from './Hamburger/Hamburger';
import NotificationsDropdown from './NotificationsDropdown/NotificationsDropdown.tsx';
import ProfileDropdown from './ProfileDropdown/ProfileDropdown.tsx';

const Header = () => {
  // Context API 생성 후 수정 필요
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

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
        <StyledNav>
          <StyledNavList>
            <StyledNavItem>
              <Link to="wekilist">위키목록</Link>
            </StyledNavItem>
            <StyledNavItem>
              <Link to="boards">자유게시판</Link>
            </StyledNavItem>
          </StyledNavList>
        </StyledNav>

        {/* 우측 버튼 모음 */}
        <StyledRightSide>
          {isLoggedIn ? (
            <>
              <StyledMenu>
                <NotificationsDropdown></NotificationsDropdown>
                <ProfileDropdown></ProfileDropdown>
              </StyledMenu>
            </>
          ) : (
            <>
              <StyledLoginButton to="login">로그인</StyledLoginButton>
              <StyledLoginButtonSample onClick={handleLogin}>
                로그인 테스트
              </StyledLoginButtonSample>
            </>
          )}
          <StyledHamburger>
            <Hamburger></Hamburger>
          </StyledHamburger>
        </StyledRightSide>
      </StyledHeaderWrap>
    </header>
  );
};

const StyledHeaderWrap = styled.div`
  display: flex;
  height: 8rem;
  padding: 0 2rem;
  align-items: center;
  gap: 4rem;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  ${media('tablet')`
    height: 6rem;
  `}
`;

const StyledNav = styled.nav`
  ${media('mobile')`
    display: none;
  `}
`;

const StyledNavList = styled.ul`
  display: flex;
  gap: 4rem;
`;

const StyledNavItem = styled.li`
  & a {
    font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
    color: ${({ theme }) => theme.colors.gray[800]};

    &:hover {
      color: ${({ theme }) => theme.colors.gray[900]};
      font: ${({ theme }) => theme.fonts['pretendard/md-14px-medium']};
    }
  }
`;

const StyledRightSide = styled.div`
  margin-left: auto;
`;

const StyledLoginButton = styled(Link)`
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
  ${media('mobile')`
  display: none;
  `}
`;

const StyledLoginButtonSample = styled.button`
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
  ${media('mobile')`
  display: none;
  `}
`;

const StyledMenu = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  ${media('mobile')`
  display: none;
  `}
`;

const StyledHamburger = styled.div`
  display: none;
  ${media('mobile')`
    display: block;
  `}
`;

export default Header;
