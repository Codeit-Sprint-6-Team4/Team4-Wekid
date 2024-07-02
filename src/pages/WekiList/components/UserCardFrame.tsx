import React from 'react';
import UserLink from '@components/userlink/UserLink';
import {
  StyledCardContainer,
  StyledUserImage,
  StyledInfoContainer,
  StyledUserName,
  StyledUserDetails,
  StyledUserLinkWrapper,
} from './UserCard.styled';

interface UserCardProps {
  image: string;
  name: string;
  city: string;
  nationality: string;
  job: string;
  code: string;
}

const UserCardFrame: React.FC<UserCardProps> = ({
  image,
  name,
  city,
  nationality,
  job,
  code,
}) => {
  return (
    <StyledCardContainer>
      <StyledUserImage src={image} alt={name} />
      <StyledInfoContainer>
        <StyledUserName>{name}</StyledUserName>
        <StyledUserDetails>
          {city}, {nationality}
          <br />
          {job}
        </StyledUserDetails>
      </StyledInfoContainer>
      <StyledUserLinkWrapper>
        <UserLink code={code} />
      </StyledUserLinkWrapper>
    </StyledCardContainer>
  );
};

export default UserCardFrame;
