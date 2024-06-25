import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

interface StyledPaginationButtonProps {
  params?: string;
}

export const StyledPaginationButton = styled.button<StyledPaginationButtonProps>`
  width: 45px;
  height: 45px;
  border-radius: 10px;
  background-color: #ffffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  color: ${({ params, children }) =>
    params === children ? theme.colors.main[500] : theme.colors.gray[600]};
  font-family: ${theme.fonts['pretendard/2lg-18px-regular']};
  font-size: 18px;
  ${media('mobile')`
    width:40px;
    height:40px;
    font-size: 12px;
  `}
`;
