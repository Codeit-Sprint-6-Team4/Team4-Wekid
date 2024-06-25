import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyledInput = styled.input`
  position: relative;
  border-radius: 10px;
  padding-left: 14px;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: ${theme.colors.gray[50]};
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[800]};
  font-weight: 500;
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${theme.colors.main[500]};
    outline: none;
  }
  &::placeholder {
    color: ${theme.colors.gray[600]};
    font-weight: 400;
    font-size: 14px;
  }
  ${media('tablet')`
    width:200px;
    height:45px;
  `}

  ${media('mobile')`
  width:200px;
  height:35px;
  `}
`;
