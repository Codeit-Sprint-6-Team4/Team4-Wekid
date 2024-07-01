import styled from 'styled-components';
import { StyledInput } from '@components/input/input';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

interface profileModeProps {
  $isMyprofile: boolean;
}
interface buttonProps {
  $isClicked: boolean;
}

export const StyeldProfileWrap = styled.div<buttonProps & profileModeProps>`
  margin: 50px auto;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);

  width: 320px;
  width: ${({ $isMyprofile }) => $isMyprofile && '400px'};

  height: 671px;
  height: ${({ $isMyprofile }) => $isMyprofile && '848px'};

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
    margin: 10px auto;
    align-items: ${({ $isClicked }) => ($isClicked ? 'initial' : 'initial')};
    gap:30px;
    width:624px;
    height:${({ $isClicked }) => ($isClicked ? '300px' : '130px')};
    button{
     display: initial;
    position:absolute;
      width:24px;
      height24px;
      left:312px;
      bottom:10px
    }
    `}

  ${media('mobile')`
   flex-direction:row;
    width:335px;
    height:${({ $isClicked }) => ($isClicked ? '300px' : '126px')};
     button{
      left:157px;
      bottom:10px
    }
    `}
`;

export const StyeldProfileImage = styled.img<buttonProps>`
  margin-top: 50px;
  width: 200px;
  height: 200px;
  border-radius: 70%;

  ${media('tablet')`
  margin-top: ${({ $isClicked }) => ($isClicked ? '30px' : '30px')};
  margin-left:15px;
    width:71px;
    height:71px;
  `}

  ${media('mobile')`
    width:62px;
    height:62px;
  `}
`;

export const StyledProfileDataWrap = styled.div<buttonProps & profileModeProps>`
  margin: 50px auto;

  width: 209px;
  width: ${({ $isMyprofile }) => $isMyprofile && '320px'};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 10px;

  ${media('tablet')`
    overflow: ${({ $isClicked }) => ($isClicked ? 'initial' : '')};
    margin-top: 30px;
    width: 189px;
    height: 80px;
  `}
  ${media('mobile')`
    width: 175px;
    height: 70px;
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
    display: ${({ $isMyprofile }) => $isMyprofile && 'none'};
    font-family: ${theme.fonts['pretendard/md-14px-regular']};
    font-weight: 400;
    color: ${theme.colors.gray[800]};
    font-size: 14px;
  }

  ${StyledInput} {
    display: ${({ $isMyprofile }) => !$isMyprofile && 'none'};
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
  `}
`;

export const StyledVetorImage = styled.img`
  width: 10.68px;
  height: 6.02px;
`;
