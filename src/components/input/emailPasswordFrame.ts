import styled from 'styled-components';
import { theme } from '@styles/theme';
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
  /* @media (max-width: ) {
  }

  @media (max-width: ) {
    ${StyledInput} {
      width: 335px;
      height: 45px;
    }
  } */
`;

export const StyledEmailPasswordName = styled.label`
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[800]};
  font-size: 14px;
`;
