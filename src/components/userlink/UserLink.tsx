import React, { useState } from 'react';
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
  position,
  top,
  bottom,
  left,
  right,
}) => {
  const [copied, setCopied] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const url = `${baseURL}${code}`;

  const handleLinkClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setSnackbarVisible(true);
        setTimeout(() => {
          setSnackbarVisible(false);
        }, 1500);
      })
      .catch((err) => {
        console.error('주소 복사 실패', err);
      });
  };

  return (
    <StyledUserLink onClick={handleLinkClick}>
      <span>{url}</span>
      {copied && (
        <Snackbar
          type={type}
          $visible={snackbarVisible}
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
