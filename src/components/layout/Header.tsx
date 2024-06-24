import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <MenuNav>
        <ul>
          <li>메뉴</li>
        </ul>
      </MenuNav>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 20px;
`;
const MenuNav = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    li {
      a {
        color: #000;
        font-size: 20px;
      }
    }
  }
`;

export default Header;
