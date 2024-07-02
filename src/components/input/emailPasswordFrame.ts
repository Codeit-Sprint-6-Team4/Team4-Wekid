import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';
import { StyledInput } from './input';

export const StyledEmailPasswordFrame = styled.div`
  width: 400px;
  height: 79px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${StyledInput} {
    width: 400px;
    height: 45px;
  }

  ${media('tablet')`
    ${StyledInput}{
    }
  `}

  ${media('mobile')`
      width:335px;
      ${StyledInput}{
      width:335px;
    }
  `}
`;

export const StyledEmailPasswordName = styled.label`
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[800]};
  font-size: 14px;
`;
