import React, { useState } from 'react';
import vector from '@assets/icons/icon-vector.svg';
import dummy from './dummyImage.jpg';
import {
  StyeldProfileImage,
  StyeldProfileWrap,
  StyledProfileData,
  StyledProfileDataWrap,
  StyledVetorImage,
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
  iseEdit?: boolean;
}
const ProfileUI = ({
  iseEdit,
  nationality,
  bloodType,
  nickname,
  birthday,
  sns,
  job,
  mbti,
  city,
}: profileUIProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StyeldProfileWrap $isClicked={isClicked}>
      <StyeldProfileImage $isClicked={isClicked} src={dummy} alt="하니" />

      <StyledProfileDataWrap $isClicked={isClicked}>
        <StyledProfileData>
          <label>거주 도시</label>
          <p>{city}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>MBTI</label>
          <p>{mbti}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>직업</label>
          <p>{job}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>SNS 계정</label>
          <p>{sns}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>생일</label>
          <p>{birthday}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>별명</label>
          <p>{nickname}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>혈액형</label>
          <p>{bloodType}</p>
        </StyledProfileData>

        <StyledProfileData>
          <label>국적</label>
          <p>{nationality}</p>
        </StyledProfileData>
      </StyledProfileDataWrap>

      <button onClick={() => setIsClicked(!isClicked)}>
        <StyledVetorImage src={vector} alt="백터이미지" />
      </button>
    </StyeldProfileWrap>
  );
};

export default ProfileUI;
