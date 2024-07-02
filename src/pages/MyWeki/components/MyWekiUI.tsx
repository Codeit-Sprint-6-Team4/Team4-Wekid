import React, { useContext } from 'react';
import { is } from 'date-fns/locale';
import Cookies from 'js-cookie';
import { profileType, profileCheckType } from '@api/profile';
import Button from '@components/button/Button';
import SnackbarContainer from '@components/snackbar/SnackbarContainer';
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
  isEdit: boolean;
  isEditNow: string | profileCheckType;
  onParticipate: () => void;
  onSave: () => void;
  onCancel: () => void;
}

const MyWekiUI = ({
  profile,
  isEditNow,
  isEdit,
  onSave,
  onCancel,
  onParticipate,
}: MyeWekiUIProps) => {
  const testIsMyprofile = isSameProfile('abc', 'abd');

  return (
    <StyledWekiWrap>
      <StyledWekiContent>
        {!isEdit && (
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
        <SnackbarContainer
          visible={isEditNow ? true : false}
          type={'info'}
          message="앞 사람의 편집이 끝나면 위키 참여가 가능합니다."
        />

        <StyledMarkUpWrap>
          {!isEdit && (
            <div
              dangerouslySetInnerHTML={{
                __html: profile ? profile.content : '',
              }}
            ></div>
          )}

          {isEdit && (
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
        isEdit={isEdit}
        isMyprofile={testIsMyprofile}
        nationality={profile?.nationality}
        family={profile?.family}
        bloodType={profile?.bloodType}
        nickname={profile?.nickname}
        birthday={profile?.birthday}
        sns={profile?.sns}
        job={profile?.job}
        mbti={profile?.mbti}
        city={profile?.city}
        image={profile?.image}
      />

      {
        isEdit && (
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
