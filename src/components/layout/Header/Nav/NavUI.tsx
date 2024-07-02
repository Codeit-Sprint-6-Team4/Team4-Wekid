import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
} from './NavUI.styled';

const Nav: React.FC = () => (
  <StyledNav>
    <StyledNavList>
      <StyledNavItem>
        <Link to="/wekilist">위키목록</Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link to="/boards">자유게시판</Link>
      </StyledNavItem>
    </StyledNavList>
  </StyledNav>
);

export default Nav;
