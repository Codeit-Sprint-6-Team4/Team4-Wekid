import React, { useState } from 'react';
import { ChangeEvent } from 'react';
import noProfile from '@assets/icons/icon-profile.svg';
import { StyledInput } from '@components/input/input';
import {
  StyeldProfileImage,
  StyeldProfileImageInputLabel,
  StyeldProfileWrap,
  StyledProfileData,
  StyledProfileDataWrap,
  StyledProfileImageInput,
} from './profile.styled';

interface profileUIProps {
  isEditMode?: boolean | undefined;
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
  onChangeProfileInput: (e: ChangeEvent<HTMLInputElement>) => void;
  editImage: File | null;
  previewImage: string;
  onChangeProfileImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ProfileUI = ({
  image,
  nationality,
  bloodType,
  nickname,
  birthday,
  sns,
  job,
  mbti,
  city,
  isEditMode,
  isMyprofile,
  onChangeProfileInput,
  onChangeProfileImage,
  previewImage,
}: profileUIProps & myProfileProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StyeldProfileWrap
      $isClicked={isClicked}
      $isMyprofile={isMyprofile}
      $isEdit={isEditMode}
    >
      <StyeldProfileImageInputLabel
        htmlFor="StyledProfileImageInput"
        $isClicked={isClicked}
        $isMyprofile={isMyprofile}
        $profileImage={image ? image : ''}
        $isEdit={isEditMode}
      >
        <img
          src={previewImage ? previewImage : image}
          onError={(e) => {
            e.currentTarget.src = noProfile;
          }}
        />
      </StyeldProfileImageInputLabel>

      <StyledProfileImageInput
        id="StyledProfileImageInput"
        type="file"
        name="profileImage"
        accept=".jpg, .jpeg, .png"
        onChange={onChangeProfileImage}
      />

      <StyeldProfileImage
        $isClicked={isClicked}
        $isMyprofile={isMyprofile}
        $isEdit={isEditMode}
        src={image}
        onError={(e) => {
          e.currentTarget.src = noProfile;
        }}
        alt="프로필이미지"
      />

      <StyledProfileDataWrap
        $isClicked={isClicked}
        $isMyprofile={isMyprofile}
        $isEdit={isEditMode}
      >
        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>거주 도시</label>
          <StyledInput
            name="city"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={city}
          />
          <p>{city}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>MBTI</label>
          <StyledInput
            name="mbti"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={mbti}
          />
          <p>{mbti}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>직업</label>
          <StyledInput
            name="job"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={job}
          />
          <p>{job}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>SNS 계정</label>
          <StyledInput
            name="sns"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={sns}
          />
          <p>{sns}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>생일</label>
          <StyledInput
            name="birthday"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={birthday}
          />
          <p>{birthday}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>별명</label>
          <StyledInput
            name="nickname"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={nickname}
          />
          <p>{nickname}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>혈액형</label>
          <StyledInput
            name="bloodType"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={bloodType}
          />
          <p>{bloodType}</p>
        </StyledProfileData>

        <StyledProfileData $isMyprofile={isMyprofile} $isEdit={isEditMode}>
          <label>국적</label>
          <StyledInput
            name="nationality"
            onChange={onChangeProfileInput}
            width={239}
            height={52}
            value={nationality}
          />
          <p>{nationality}</p>
        </StyledProfileData>
      </StyledProfileDataWrap>
    </StyeldProfileWrap>
  );
};

export default ProfileUI;
