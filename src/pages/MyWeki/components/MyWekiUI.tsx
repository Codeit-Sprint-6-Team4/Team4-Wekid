import React, { ChangeEvent, forwardRef, useContext } from 'react';
import ReactQuill from 'react-quill';
import { Link, useParams } from 'react-router-dom';
import { MyWekiDataContext } from '@context/myWekiDataContext';
import { profileType, profileCheckType } from '@api/profile';
import { postEditingProfile } from '@api/profile';
import { userType } from '@api/user';
import Button from '@components/button/Button';
import Modal from '@components/modal/Modal';
import UserLink from '@components/userlink/UserLink';
import isSameProfile from '@utils/isSameProfile';
import EditorUI from './EditorUI';
import ProfileUI from './ProfileUI';
import { StyledMarkUpWrap, StyledMarkUpHeader } from './markUp.styled';
import {
  StyledWekiWrap,
  StyledWekiContent,
  StyledWekiHeader,
  StyledMyWikiUserLinkWrapper,
  StyledNoContentWrapper,
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
  onChangeModalInput: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeProfileInput: (e: ChangeEvent<HTMLInputElement>) => void;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editImage: File | null;
  previewImage: string;
  onChangeProfileImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const MyWekiUI = forwardRef<ReactQuill, MyeWekiUIProps>(
  (
    {
      editImage,
      previewImage,
      onChangeProfileImage,
      profile,
      isEditNow,
      isEditMode,
      isModalOpen,
      modalInput,
      onChangeModalInput,
      onChangeProfileInput,
      setIsEditMode,
      onSave,
      onCancel,
      onParticipate,
      onModalClose,
    },
    ref,
  ) => {
    const userData = useContext<userType | null>(MyWekiDataContext);
    const { code } = useParams();
    let isMyProfile: boolean = false;

    if (
      userData !== null &&
      typeof userData.profile?.code === 'string' &&
      code
    ) {
      isMyProfile = isSameProfile(userData.profile.code, code);
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

              {typeof code === 'string' && (
                <StyledMyWikiUserLinkWrapper>
                  <UserLink code={code} />
                </StyledMyWikiUserLinkWrapper>
              )}
            </StyledWekiHeader>
          )}
          {/* {!(
            typeof isEditNow !== 'string' && isEditNow.userId === userData?.id
          ) && (
            <Snackbar
              type="error"
              position="absolute"
              top="10px"
              visible={isEditNow ? true : false}
            />
          )} */}

          {isModalOpen && (
            <Modal
              type={'question'}
              securityQuestion={profile?.securityQuestion}
              onClose={onModalClose}
              answer={modalInput}
              setAnswer={onChangeModalInput}
              confirmAnswer={() => {
                setIsEditMode(true);
                onModalClose();
              }}
              onConfirm={() => postEditingProfile(code!, modalInput)}
            />
          )}

          <StyledMarkUpWrap>
            {!isEditMode && profile !== null && !profile?.content && (
              <StyledNoContentWrapper>
                <p>아직 작성된 내용이 없네요. 위키에 참여해 보세요!</p>
                <Link to={'/mypage'}>시작하기</Link>
              </StyledNoContentWrapper>
            )}
            {!isEditMode && profile?.content && (
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
                ref={ref}
              />
            )}
          </StyledMarkUpWrap>
        </StyledWekiContent>

        <ProfileUI
          editImage={editImage}
          previewImage={previewImage}
          onChangeProfileImage={onChangeProfileImage}
          onChangeProfileInput={onChangeProfileInput}
          isEditMode={isEditMode}
          isMyprofile={isMyProfile}
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
  },
);

export default MyWekiUI;
