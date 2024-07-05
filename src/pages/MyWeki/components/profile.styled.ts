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
  margin: 50px auto;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  width: 320px;
  width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '400px'};

  height: 671px;
  height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '848px'};

  border-radius: 10px;
  border-color: none;
  background-color: #ffffffff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: none;
  }

  ${media('tablet')`
    flex-direction:row;
    flex-direction:${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'column'};
    
    margin: 10px auto;
    
    align-items: ${({ $isClicked }) => ($isClicked ? 'initial' : 'initial')};
    align-items: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'center'};

    gap:30px;
    width:624px;
    height:${({ $isClicked }) => ($isClicked ? '300px' : '130px')};
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '388px'};
    button{
      display: initial;
      display:${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'none'};
      position:absolute;
      width:24px;
      height24px;
      left:312px;
      bottom:10px
    }
    `}

  ${media('mobile')`
    flex-direction:row;
    flex-direction:${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'column'};
    
    align-items: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'center'};

    width:335px;

    height:${({ $isClicked }) => ($isClicked ? '300px' : '126px')};
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '511px'};
 
    button{
      display:${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'none'};
      left:157px;
      bottom:10px
    }
    `}
`;

export const StyeldProfileImage = styled.img<buttonProps & profileModeProps>`
  margin-top: 50px;
  width: 200px;
  height: 200px;
  border-radius: 70%;
  display: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'none'};

  ${media('tablet')`
    margin-top: ${({ $isClicked }) => ($isClicked ? '30px' : '30px')};
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
  margin-top: 50px;
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
  ${media('tablet')`
    margin-top: ${({ $isClicked }) => ($isClicked ? '30px' : '30px')};
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

export const StyledProfileImageInput = styled.input`
  display: none;
`;

export const StyledProfileDataWrap = styled.div<buttonProps & profileModeProps>`
  margin: 50px auto;

  width: 209px;
  width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '320px'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 10px;

  ${media('tablet')`

    flex-wrap: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'wrap'};

    overflow: ${({ $isClicked }) => ($isClicked ? 'initial' : '')};
    overflow: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && 'initial'};
    
    margin-top: 30px;
    margin-top: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '0px'};
    
    width: 189px;
    width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '592px'};
    
    height: 80px;
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '228px'};
  `}
  ${media('mobile')`

    width: 175px;
    width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '268px'};

    height: 70px;
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '384px'};
  `}
`;

export const StyledProfileData = styled.div<profileModeProps>`
  display: flex;
  align-items: center;
  gap: 15px;

  label {
    width: 60px;
    font-family: ${theme.fonts['pretendard/md-14px-regular']};
    font-weight: 400;
    color: ${theme.colors.gray[600]};
    font-size: 14px;
  }

  p {
    display: ${({ $isMyprofile, $isEdit }) =>
      $isEdit && $isMyprofile && 'none'};
    font-family: ${theme.fonts['pretendard/md-14px-regular']};
    font-weight: 400;
    color: ${theme.colors.gray[800]};
    font-size: 14px;
  }

  ${StyledInput} {
    display: ${({ $isMyprofile, $isEdit }) =>
      (!$isEdit || ($isEdit && !$isMyprofile)) && 'none'};

    width: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '200px'};
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '45px'};
  }

  ${media('tablet')`
    label {
      width: 60px;
      font-family: ${theme.fonts['pretendard/md-14px-regular']};
      font-weight: 400;
      color: ${theme.colors.gray[600]};
      font-size: 14px;
    }

    p {
      font-family: ${theme.fonts['pretendard/md-14px-regular']};
      font-weight: 400;
      color: ${theme.colors.gray[800]};
      font-size: 14px;
    }
  `};

  ${media('mobile')`
   ${StyledInput} {
    height: ${({ $isMyprofile, $isEdit }) => $isMyprofile && $isEdit && '34px'};
  }`}
`;

export const StyledVetorImage = styled.img`
  width: 10.68px;
  height: 6.02px;
`;
