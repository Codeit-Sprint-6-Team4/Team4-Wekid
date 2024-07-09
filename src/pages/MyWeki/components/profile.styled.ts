import styled from 'styled-components';
import { StyledInput } from '@components/input/input';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

interface profileModeProps {
  $isMyprofile: boolean;
  $isEdit?: boolean;
}

interface buttonProps {
  $isClicked: boolean;
}

interface profileImageInputWrapProps {
  $profileImage: string;
}

export const StyeldProfileWrap = styled.div<buttonProps & profileModeProps>`
  position: relative;
  padding: 4rem;
  align-items: flex-start;

  width: 320px;
  width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '400px'};

  border-radius: 10px;
  border-color: none;
  background-color: #ffffffff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: none;
  }

  ${media('desktop')`
    flex-direction:${({ $isMyprofile, $isEdit }) => ($isMyprofile && $isEdit ? 'column' : 'row')};
    align-items: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'center'};
    padding: 3rem 1.6rem;
    gap:30px;
    width:100%;
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'auto'};
    `}

  ${media('mobile')`
    flex-direction:${({ $isMyprofile, $isEdit }) => ($isMyprofile && $isEdit ? 'column' : 'row')};
    align-items: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'center'};
    height:${({ $isClicked }) => ($isClicked ? 'auto' : 'auto')};
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'auto'};
    align-items: flex-start;
    button{
    display: initial;
      display:${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'none'};
      position:absolute;
      width:24px;
      height24px;
      left:50%;
      transform: translateX(-50%);
      bottom:10px
    }
    `}
`;

export const StyeldProfileImage = styled.img<buttonProps & profileModeProps>`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  display: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'none'};

  ${media('desktop')`
    margin-top:${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '8px'};
    margin-left:15px;
    width:71px;
    height:71px;
    border-radius: 100%;
  `}

  ${media('mobile')`
    width:62px;
    height:62px;
  `}
`;

export const StyeldProfileImageInputLabel = styled.label<
  buttonProps & profileModeProps & profileImageInputWrapProps
>`
  margin: 20px 0;
  width: 200px;
  height: 200px;
  border-radius: 70%;
  background-image: url(${({ $profileImage }) => $profileImage});
  cursor: pointer;

  display: ${({ $isMyprofile, $isEdit }) =>
    !($isMyprofile && $isEdit) && 'none'};

  img {
    width: 100%;
    height: 100%;
  }

  ${media('desktop')`
    margin-top:${({ $isMyprofile, $isEdit }) => ($isMyprofile && $isEdit ? '8px' : '30px')};
    margin-left:15px;
    width:71px;
    height:71px;
    border-radius: 100%;
  `}

  ${media('mobile')`
    width:62px;
    height:62px;
  `}
`;

export const StyledProfileImageInput = styled.input`
  display: none;
`;

export const StyledProfileDataWrap = styled.div<buttonProps & profileModeProps>`
  margin-top: 40px;
  width: 100%;
  width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '320px'};
  display: flex;
  overflow: hidden;
  gap: 14px;
  flex-wrap: wrap;

  ${media('desktop')`
    flex-direction: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'row'};
    overflow: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'initial'};
    margin-top: 0;
    width: 100%;
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'auto'};
  `}

  ${media('mobile')`
    flex-direction: column;
    width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '100%'};
    flex: 1;
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'auto'};
  `}
`;

export const StyledProfileData = styled.div<profileModeProps>`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;

  ${media('desktop')`
  flex: 1 0 40%;
  `}

  label {
    width: 60px;
    font: ${theme.fonts['pretendard/md-14px-regular']};
    font-weight: 400;
    color: ${theme.colors.gray[600]};
    font-size: 14px;
    white-space: nowrap;
  }

  p {
    display: ${({ $isMyprofile, $isEdit }) =>
      $isEdit && $isMyprofile && 'none'};
    font: ${theme.fonts['pretendard/md-14px-regular']};
    font-weight: 400;
    color: ${theme.colors.gray[800]};
    font-size: 14px;
  }

  ${StyledInput} {
    display: ${({ $isMyprofile, $isEdit }) =>
      (!$isEdit || ($isEdit && !$isMyprofile)) && 'none'};
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '45px'};
    flex: 1;
    width: auto;
  }

  ${media('desktop')`
    label {
      width: 60px;
      font: ${theme.fonts['pretendard/md-14px-regular']};
      font-weight: 400;
      color: ${theme.colors.gray[600]};
      font-size: 14px;
    }

    p {
      font: ${theme.fonts['pretendard/md-14px-regular']};
      font-weight: 400;
      color: ${theme.colors.gray[800]};
      font-size: 14px;
    }
  `};

  ${media('mobile')`
   ${StyledInput} {
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '34px'};
  }
    flex: 1;`}
`;
