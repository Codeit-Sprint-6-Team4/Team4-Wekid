import styled from 'styled-components';
import { theme } from '@styles/theme';
import { DEVICE_SIZE } from '@utils/deviceSize';
import { InputStyled } from './input';

export const ProfileFrameStyled = styled.div`
  width: 320px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${InputStyled} {
    width: 239px;
    height: 45px;
  }
  @media (max-width: ${DEVICE_SIZE.tablet}px) {
    ${InputStyled} {
      width: 200px;
      height: 45px;
    }
  }
  @media (max-width: ${DEVICE_SIZE.mobile}px) {
    ${InputStyled} {
      width: 200px;
      height: 34px;
    }
  }
`;

export const ProfileNameStyled = styled.label`
  width: 60px;
  font-style: ${theme.fonts['pretendard/md-14px-regular']};
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors.gray[600]};
`;
