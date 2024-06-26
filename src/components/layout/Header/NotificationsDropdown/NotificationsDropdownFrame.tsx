import styled from 'styled-components';

export const StyledAlarmTotalCount = styled.div`
  padding: 0.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.gray[100]};
  text-align: left;
  font: ${({ theme }) => theme.fonts['pretendard/xs-12px-regular']};
  color: ${({ theme }) => theme.colors.gray[800]};

  & b {
    font-weight: 600;
  }
`;

export const StyledAlarmMenu = styled.ul`
  width: 23rem;
  max-height: 28rem;
  overflow: hidden;
  overflow-y: auto;
`;

export const StyledAlarmMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.6rem;
  gap: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};

  &:last-child {
    border: none;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.gray[50]};
  }

  & > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
`;

export const StyledAlarmText = styled.p`
  margin-bottom: 0.4rem;
  white-space: nowrap;
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[900]};
`;

export const StyledAlarmTime = styled.p`
  font: ${({ theme }) => theme.fonts['pretendard/xs-12px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const StyledNoAlarms = styled.div`
  padding: 1rem 1.6rem;
  text-align: center;
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  color: ${({ theme }) => theme.colors.gray[600]};
`;
