import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '@utils/media';

export const StyledHeaderWrap = styled.div`
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

export const StyledNav = styled.nav`
  ${media('mobile')`
    display: none;
  `}
`;

export const StyledNavList = styled.ul`
  display: flex;
  gap: 4rem;
`;

export const StyledNavItem = styled.li`
  & a {
    font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
    color: ${({ theme }) => theme.colors.gray[800]};

    &:hover {
      color: ${({ theme }) => theme.colors.gray[900]};
      font: ${({ theme }) => theme.fonts['pretendard/md-14px-medium']};
    }
  }
`;

export const StyledRightSide = styled.div`
  margin-left: auto;
`;

export const StyledLoginButton = styled(Link)`
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
  ${media('mobile')`
  display: none;
  `}
`;

export const StyledLoginButtonSample = styled.button`
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
  &:hover {
    color: ${({ theme }) => theme.colors.gray[100]};
  }
  ${media('mobile')`
  display: none;
  `}
`;

export const StyledMenu = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  ${media('mobile')`
  display: none;
  `}
`;

export const StyledHamburger = styled.div`
  display: none;
  ${media('mobile')`
    display: block;
  `}
`;
