// src/components/userlink/UserLink.tsx
import React from 'react';
import { StyledUserLink } from './UserLink.styled';

interface UserLinkProps {
  code: string;
}

const UserLink: React.FC<UserLinkProps> = ({ code }) => {
  const baseURL = 'https://www.wikied.kr/';
  const url = `${baseURL}${code}`;
  return <StyledUserLink href={url}>{url}</StyledUserLink>;
};

export default UserLink;
