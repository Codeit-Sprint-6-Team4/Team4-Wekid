import HeartIcon from 'public/assets/icons/icon-heart.svg';
import ImageIcon from 'public/assets/icons/icon-image.svg';
import styled from 'styled-components';
import HeartIconFilled from '@assets/icons/icon-heart-fill.svg';
import { media } from '@utils/media';

export const StyledCardContainer = styled.div`
  /* width: 250px; */
  flex: 1 0 20rem;
  height: 220px;
  background-color: ${(props) => props.theme.colors.gray[0]};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 20px 0px #00000014;
  cursor: pointer;

  ${media('desktop')`
    &:last-child {
    display: none;
    }
  `}

  ${media('tablet')`
    &:last-child {
    display: block;
    }
  `}

${media('mobile')`
  flex: 1 0 25rem;
  `}
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 131px;
  object-fit: cover;
`;

export const StyledCardNoImage = styled.div`
  width: 100%;
  height: 131px;
  background-color: ${(props) => props.theme.colors.gray[50]};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledNoImageIcon = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${ImageIcon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledCardContent = styled.div`
  width: 84%;
  height: 56px;
  margin: 19px auto;
  padding: 0 2rem;

  ${media('tablet')`
    margin: 20.07px auto;
  `}
  ${media('mobile')`
    width: 212px;
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
  &.date {
    @media (max-width: 950px) {
      display: none;
    }
    ${media('tablet')`
      display: flex;
    `}
    @media (max-width: 500px) {
      display: none;
    }
    ${media('mobile')`
      display: flex;
    `}
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

export const StyledHeartIcon = styled.span<{ $isLiked: boolean }>`
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background-image: url(${HeartIcon});
  background-image: url(${(props) =>
    props.$isLiked ? HeartIconFilled : HeartIcon});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
