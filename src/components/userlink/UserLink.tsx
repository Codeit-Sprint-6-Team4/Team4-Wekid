import React from 'react';
import UserLinkContainer from './UserLinkContainer';

interface UserLinkProps {
  code: string;
}

const UserLink: React.FC<UserLinkProps> = ({ code }) => {
  return <UserLinkContainer code={code} />;
};

export default UserLink;
