import React, { useEffect, useState } from 'react';
import Snackbar from '@components/snackbar/Snackbar';
import { StyledUserLink } from './UserLink.styled';

interface UserLinkProps {
  code: string;
  type?: 'info' | 'success' | 'error';
  visible?: boolean;
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
const baseURL = 'https://www.widied.kr/wiki/';

const UserLink: React.FC<UserLinkProps> = ({
  code,
  type = 'success',
  visible = true,
  position,
  top,
  bottom,
  left,
  right,
}) => {
  const [copied, setCopied] = useState(false);
  const url = `${baseURL}${code}`;

  const handleLinkClick = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error('주소 복사 실패', err);
      });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <StyledUserLink onClick={handleLinkClick}>
      <span>{url}</span>
      {copied && (
        <Snackbar
          type={type}
          visible={visible}
          position={position}
          top={top}
          bottom={bottom}
          left={left}
          right={right}
        />
      )}
    </StyledUserLink>
  );
};

export default UserLink;
