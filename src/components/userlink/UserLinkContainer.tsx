import React from 'react';
import styled from 'styled-components';
import linkIcon from '@assets/icons/icon-link-green.svg';

interface UserLinkProps {
  code: string;
}

const UserLinkStyled = styled.a`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  background-color: ${({ theme }) => theme.colors.main[50]};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.main[500]};
  font: ${({ theme }) => theme.fonts['pretendard/md-14px-regular']};
  white-space: nowrap;

  &::before {
    content: '';
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-right: 2px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url(${linkIcon});
  }

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    padding: 4px 10px;
    font: ${({ theme }) => theme.fonts['pretendard/xs-12px-regular']};

    &::before {
      width: 14px;
      height: 14px;
      margin-right: 1px;
    }
  }
`;

const baseURL = 'https://www.widied.kr/';

const UserLinkContainer: React.FC<UserLinkProps> = ({ code }) => {
  const url = `${baseURL}${code}`;
  return <UserLinkStyled href={url}>{url}</UserLinkStyled>;
};

export default UserLinkContainer;
