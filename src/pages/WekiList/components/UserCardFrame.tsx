import React, { useState } from 'react';
import DefaultProfileImg from '@assets/icons/icon-profile.svg';
import UserLink from '@components/userlink/UserLink';
import {
  StyledCardContainer,
  StyledUserImage,
  StyledInfoContainer,
  StyledUserName,
  StyledUserDetailsContainer,
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
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <StyledCardContainer>
      {!imageError && image ? (
        <StyledUserImage src={image} alt={name} onError={handleImageError} />
      ) : (
        <StyledUserImage src={DefaultProfileImg} alt={name} />
      )}

      <StyledInfoContainer>
        <StyledUserName>{name}</StyledUserName>
        <StyledUserDetailsContainer>
          <StyledUserDetails>
            {city && nationality ? (
              <>
                {city}, {nationality}
                <br />
                {}
              </>
            ) : city ? (
              <>
                {city}
                <br />
                {}
              </>
            ) : nationality ? (
              <>
                {nationality}
                <br />
                {}
              </>
            ) : null}
            {job && (
              <>
                {job}
                <br />
              </>
            )}
          </StyledUserDetails>
          <StyledUserLinkWrapper>
            <UserLink code={code} />
          </StyledUserLinkWrapper>
        </StyledUserDetailsContainer>
      </StyledInfoContainer>
    </StyledCardContainer>
  );
};

export default UserCardFrame;
