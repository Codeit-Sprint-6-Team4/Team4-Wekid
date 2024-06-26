import HeartIcon from 'public/assets/icons/icon-heart.svg';
import styled from 'styled-components';
import { media } from '@utils/media';

export const StyledCardContainer = styled.div`
  width: 250px;
  height: 220px;
  background-color: ${(props) => props.theme.colors.gray[50]};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 20px 0px #00000014;
  cursor: pointer;

  ${media('tablet')`
    width: 302px;
    height: 220px;
  `}
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 131px;
  object-fit: cover;
`;

export const StyledCardContent = styled.div`
  width: 212px;
  height: 56px;
  margin: 19px auto;

  ${media('tablet')`
    width: 262px;
    margin: 20.07px auto;
  `}
`;

export const StyledCardTitle = styled.h3`
  font: ${(props) => props.theme.fonts['pretendard/2lg-18px-semibold']};
  margin-bottom: 7px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StyledCardInfo = styled.div`
  height: 100%;
  font: ${(props) => props.theme.fonts['pretendard/md-14px-regular']};
  color: ${(props) => props.theme.colors.gray[600]};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;

  &.writer {
    margin-right: 8px;
  }
`;

export const StyledCardInfoContainer1 = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCardInfoContainer2 = styled.div`
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const StyledCardLikesContainer = styled.div`
  width: 46px;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
`;

export const StyledHeartIcon = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background-image: url(${HeartIcon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;