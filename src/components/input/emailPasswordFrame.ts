import styled from 'styled-components';
import { theme } from '@styles/theme';
import { DEVICE_SIZE } from '@utils/deviceSize';
import { InputStyled } from './input';

export const EmailPasswordFrameStyled = styled.div`
  width: 400px;
  height: 79px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${InputStyled} {
    width: 400px;
    height: 45px;
  }
  @media (max-width: ${DEVICE_SIZE.tablet}px) {
  }

  @media (max-width: ${DEVICE_SIZE.mobile}px) {
    ${InputStyled} {
      width: 335px;
      height: 45px;
    }
  }
`;

export const EmailPasswordNameStyled = styled.label`
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  color: ${theme.colors.gray[800]};
  font-size: 14px;
`;
