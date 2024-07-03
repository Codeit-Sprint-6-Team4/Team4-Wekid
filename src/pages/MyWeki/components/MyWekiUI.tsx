import React, { ChangeEvent, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import { profileType, profileCheckType } from '@api/profile';
import { postEditingProfile } from '@api/profile';
import { userType } from '@api/user';
import Button from '@components/button/Button';
import Modal from '@components/modal/Modal';
import isSameProfile from '@utils/isSameProfile';
import EditorUI from './EditorUI';
import ProfileUI from './ProfileUI';
import { StyledMarkUpWrap, StyledMarkUpHeader } from './markUp.styled';
import {
  StyledWekiWrap,
  StyledWekiContent,
  StyledWekiHeader,
} from './wekiPage.styled';

interface MyeWekiUIProps {
  profile: profileType | null;
  modalInput: string;
  isEditMode: boolean;
  isEditNow: string | profileCheckType;
  isModalOpen: boolean;
  onParticipate: () => void;
  onSave: () => void;
  onCancel: () => void;
  onModalClose: () => void;
  confirmAnswer: () => void;
  onChangeModalInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyWekiUI = ({
  profile,
  isEditNow,
  isEditMode,
  isModalOpen,
  modalInput,
  onChangeModalInput,
  confirmAnswer,
  onSave,
  onCancel,
  onParticipate,
  onModalClose,
}: MyeWekiUIProps) => {
  const userData = useContext<userType | null>(MyWekiDataContext);
  const { code } = useParams();

  let testIsMyProfile: boolean = false;

  if (userData !== null && typeof userData.code === 'string' && code) {
    testIsMyProfile = isSameProfile(userData.code, code);
  }

  return (
    <StyledWekiWrap>
      <StyledWekiContent>
        {!isEditMode && (
          <StyledWekiHeader>
            <div>
              <h2>{profile ? profile.name : ''}</h2>
              <Button
                onClick={onParticipate}
                $primary
                $width="160px"
                $height="45px"
              >
                위키참여하기
              </Button>
            </div>
          </StyledWekiHeader>
        )}

        {/* <Snackbar
          visible={isEditNow ? true : false}
          type={'info'}
          message="앞 사람의 편집이 끝나면 위키 참여가 가능합니다."
        /> */}

        {isModalOpen && (
          <Modal
            type={'question'}
            securityQuestion={profile?.securityQuestion}
            onClose={onModalClose}
            answer={modalInput}
            setAnswer={onChangeModalInput}
            confirmAnswer={confirmAnswer}
            onConfirm={() => postEditingProfile(code!, modalInput)}
          />
        )}

        <StyledMarkUpWrap>
          {!isEditMode && (
            <div
              dangerouslySetInnerHTML={{
                __html: profile ? profile.content : '',
              }}
            ></div>
          )}

          {isEditMode && (
            <EditorUI
              onSave={onSave}
              onCancel={onCancel}
              content={profile?.content as string}
              name={profile ? profile.name : ''}
            />
          )}
        </StyledMarkUpWrap>
      </StyledWekiContent>

      <ProfileUI
        isEditMode={isEditMode}
        isMyprofile={testIsMyProfile}
        nationality={profile?.nationality}
        family={profile?.family}
        bloodType={profile?.bloodType}
        nickname={profile?.nickname}
        birthday={profile?.birthday}
        sns={profile?.sns}
        job={profile?.job}
        mbti={profile?.mbti}
        city={profile?.city}
        image={profile?.image ? profile.image : ''}
      />

      {
        isEditMode && (
          <StyledMarkUpHeader>
            <h2>{profile?.name}</h2>
            <div>
              <Button
                onClick={onCancel}
                $width="65px"
                $secondary
                $height="40px"
              >
                취소
              </Button>

              <Button onClick={onSave} $primary $width="65px" $height="40px">
                저장
              </Button>
            </div>
          </StyledMarkUpHeader>
        )
        // </>
      }
    </StyledWekiWrap>
  );
};

export default MyWekiUI;
