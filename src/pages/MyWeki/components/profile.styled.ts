import styled from 'styled-components';
import { theme } from '@styles/theme';
import { media } from '@utils/media';

export const StyeldProfileWrap = styled.div`
  width: 320px;
  height: 671px;
  border-radius: 10px;
  border-color: none;
  background-color: #ffffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media('tablet')`
    flex-direction:row;
    align-items: center;
    gap:30px;
    width:624px;
    height:130px;`}

  ${media('mobile')`
   flex-direction:row;
    width:335px;
    height:126px;
    `}
`;

export const StyeldProfileImage = styled.img`
  margin-top: 50px;
  width: 200px;
  height: 200px;
  border-radius: 70%;

  ${media('tablet')`
  margin-top: 0px;
  margin-left:15px;
    width:71px;
    height:71px;
  `}

  ${media('mobile')`
    width:62px;
    height:62px;
  `}
`;

export const StyledProfileDataWrap = styled.div`
  margin: 50px auto auto 30px;
  width: 209px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 10px;
  ${media('tablet')`
    margin: 0px;
    width: 199px;
    height: 80px;
  `}
  ${media('mobile')`
    margin: 0px;
    width: 175px;
    height: 70px;
  `}
`;

export const StyledProfileData = styled.div`
  display: flex;
  gap: 15px;

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
