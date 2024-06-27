import React from 'react';
import dummy from './dummyImage.jpg';
import {
  StyeldProfileImage,
  StyeldProfileWrap,
  StyledProfileData,
  StyledProfileDataWrap,
} from './profile.styled';

interface profileUIProps {
  nationality?: string;
  family?: string;
  bloodType?: string;
  nickname?: string;
  birthday?: string;
  sns?: string;
  job?: string;
  mbti?: string;
  city?: string;
  image?: string;
}
const ProfileUI = ({
  nationality,
  family,
  bloodType,
  nickname,
  birthday,
  sns,
  job,
  mbti,
  city,
  image,
}: profileUIProps) => {
  return (
    <StyeldProfileWrap>
      <StyeldProfileImage src={dummy} alt="하니" />

      <StyledProfileDataWrap>
        <StyledProfileData>
          <label>거주 도시</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>MBTI</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>직업</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>SNS 계정</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>생일</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>별명</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>혈핵형</label>
          <p>서울</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>국적</label>
          <p>서울</p>
        </StyledProfileData>
      </StyledProfileDataWrap>
    </StyeldProfileWrap>
  );
};

export default ProfileUI;
