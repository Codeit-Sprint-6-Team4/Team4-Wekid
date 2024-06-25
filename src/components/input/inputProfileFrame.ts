import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';
import { StyledInput } from './input';

export const StyledProfileFrame = styled.div`
  width: 320px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${StyledInput} {
    width: 239px;
    height: 45px;
  }
  ${media('tablet')`
    ${StyledInput}{
    width:200px;
    }
  `}
  ${media('mobile')`
      ${StyledInput}{
    width:200px;
    height:34px;
    }
  `}
`;

export const StyledProfileName = styled.label`
  width: 60px;
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.gray[600]};
`;
