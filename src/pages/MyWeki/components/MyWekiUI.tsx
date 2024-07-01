import React from 'react';
import { profileType } from '@api/profile';
import Button from '@components/button/Button';
import ProfileUI from './ProfileUI';
import WritingUI from './WritingUI';
import { StyledMarkUpWrap } from './markUp.styled';
import {
  StyledWekiWrap,
  StyledWekiContent,
  StyledWekiHeader,
} from './wekiPage.styled';

interface MyeWekiUIProps {
  profile: profileType | null;
  isEdit?: boolean;
}
const MyWekiUI = ({ profile, isEdit = true }: MyeWekiUIProps) => {
  return (
    <StyledWekiWrap>
      <StyledWekiContent>
        <StyledWekiHeader>
          <div>
            <h2>{profile?.name}</h2>
            <Button $primary $width="160px" $height="45px">
              위키참여하기
            </Button>
          </div>
        </StyledWekiHeader>
        <StyledMarkUpWrap>
          {!isEdit && (
            <div
              dangerouslySetInnerHTML={{ __html: profile?.content as string }}
            ></div>
          )}
          {isEdit && <WritingUI content={profile?.content as string} />}
        </StyledMarkUpWrap>
      </StyledWekiContent>
      {!isEdit && <ProfileUI {...profile} />}
    </StyledWekiWrap>
  );
};

export default MyWekiUI;