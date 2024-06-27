import styled from 'styled-components';
import { media } from '@utils/media';

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
