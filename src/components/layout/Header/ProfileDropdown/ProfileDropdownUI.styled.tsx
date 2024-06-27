import styled from 'styled-components';

export const StyledMyMenu = styled.ul`
  text-align: center;
`;

export const StyledMyMenuItem = styled.li`
  padding: 1rem 1.6rem;

  & a {
    font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
    color: ${({ theme }) => theme.colors.gray[800]};
  }
  & a:hover {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;
