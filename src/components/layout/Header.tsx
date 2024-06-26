import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '@assets/images/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">
          <img src={logoImg} alt="로고" />
        </Link>
      </h1>
      <Outlet />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
`;

export default Header;
