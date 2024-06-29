import React from 'react';
import Cookies from 'js-cookie';
import { profileType } from '@api/profile';
import Button from '@components/button/Button';
import EditorUI from './EditorUI';
import ProfileUI from './ProfileUI';
import { StyledMarkUpWrap } from './markUp.styled';
import {
  StyledWekiWrap,
  StyledWekiContent,
  StyledWekiHeader,
} from './wekiPage.styled';

interface MyeWekiUIProps {
  profile: profileType | null;
  isEdit: boolean;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}
const MyWekiUI = ({ profile, isEdit, setIsEdit }: MyeWekiUIProps) => {
  return (
    <StyledWekiWrap>
      <StyledWekiContent>
        {!isEdit && (
          <StyledWekiHeader>
            <div>
              <h2>{profile ? profile.name : ''}</h2>
              <Button $primary $width="160px" $height="45px">
                위키참여하기
              </Button>
            </div>
          </StyledWekiHeader>
        )}

        <StyledMarkUpWrap>
          {!isEdit && (
            <div
              dangerouslySetInnerHTML={{
                __html: profile ? profile.content : '',
              }}
            ></div>
          )}

          {isEdit && Cookies.get('aceessToken') !== 'dad' && (
            <EditorUI
              setIsEdit={setIsEdit}
              content={profile?.content as string}
              name={profile ? profile.name : ''}
            />
          )}
        </StyledMarkUpWrap>
      </StyledWekiContent>
      {!isEdit && <ProfileUI {...profile} />}
    </StyledWekiWrap>
  );
};

export default MyWekiUI;
