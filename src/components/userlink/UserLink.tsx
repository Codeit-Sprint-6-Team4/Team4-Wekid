import { StyledUserLink } from './UserLink.styled';

interface UserLinkProps {
  code: string;
}

const UserLink = ({ code }: UserLinkProps) => {
  const baseURL = 'https://www.wikied.kr/';
  const url = `${baseURL}${code}`;
  return (
    <StyledUserLink href={url} title={url}>
      <span>{url}</span>
    </StyledUserLink>
  );
};

export default UserLink;
