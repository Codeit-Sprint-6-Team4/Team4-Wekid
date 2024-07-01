import React, { useState } from 'react';
import vector from '@assets/icons/icon-vector.svg';
import { StyledInput } from '@components/input/input';
import dummy from './dummyImage.jpg';
import {
  StyeldProfileImage,
  StyeldProfileWrap,
  StyledProfileData,
  StyledProfileDataWrap,
  StyledVetorImage,
} from './profile.styled';

interface profileUIProps {
  isEdit?: boolean | undefined;
  nationality: string | undefined;
  family: string | undefined;
  bloodType: string | undefined;
  nickname: string | undefined;
  birthday: string | undefined;
  sns: string | undefined;
  job: string | undefined;
  mbti: string | undefined;
  city: string | undefined;
  image: string | undefined;
}
interface myProfileProps {
  isMyprofile: boolean;
}
const ProfileUI = ({
  nationality,
  bloodType,
  nickname,
  birthday,
  sns,
  job,
  mbti,
  city,
  isEdit,
  isMyprofile,
}: profileUIProps & myProfileProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <StyeldProfileWrap
      $isClicked={isClicked}
      $isMyprofile={isMyprofile as boolean}
    >
      <StyeldProfileImage $isClicked={isClicked} src={dummy} alt="하니" />

      <StyledProfileDataWrap $isClicked={isClicked} $isMyprofile={isMyprofile}>
        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>거주 도시</label>
          <StyledInput width={239} height={52} value={city} />
          <p>{city}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>MBTI</label>
          <StyledInput width={239} height={52} value={mbti} />
          <p>{mbti}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>직업</label>
          <StyledInput width={239} height={52} value={job} />
          <p>{job}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>SNS 계정</label>
          <StyledInput width={239} height={52} value={sns} />
          <p>{sns}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>생일</label>
          <StyledInput width={239} height={52} value={birthday} />
          <p>{birthday}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>별명</label>
          <StyledInput width={239} height={52} value={birthday} />
          <p>{nickname}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>혈액형</label>
          <StyledInput width={239} height={52} value={birthday} />
          <p>{bloodType}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile}>
          <label>국적</label>
          <StyledInput width={239} height={52} value={birthday} />
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
