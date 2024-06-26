import styled from 'styled-components';
import Button from '@components/button/Button';
import { theme } from '@styles/theme';

export const StyledNoticeContent = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const StyledModalTitle = styled.div`
  font: ${theme.fonts['pretendard/2lg-18px-semibold']};
  color: ${theme.colors.gray[800]};
`;

export const StyledModalSubtitle = styled.div`
  margin-top: 10px;
  margin-bottom: 33px;
  font: ${theme.fonts['pretendard/lg-16px-regular']};
  color: ${theme.colors.gray[600]};
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const StyledCustomButton = styled(Button)`
  background-color: ${theme.colors.red[500]};
  color: ${theme.colors.gray[0]};
`;
