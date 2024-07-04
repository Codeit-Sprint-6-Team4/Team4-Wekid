import styled, { css } from 'styled-components';
import { media } from '@utils/media';
import HeartIcon from 'public/assets/icons/icon-heart.svg';

export const StyledRow = styled.div<{ $isHead?: boolean }>`
  width: 1060px;
  height: 50px;
  display: flex;
  border-top: ${(props) =>
    props.$isHead ? `1px solid ${props.theme.colors.gray[100]}` : 'none'};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};

  ${media('tablet')`
    width: 624px;
  `}
  ${media('mobile')`
    display: none;
  `}
`;

export const StyledColumn = styled.div<{ $isHead?: boolean }>`
  height: 100%;
  font: ${(props) => props.theme.fonts['pretendard/lg-16px-regular']};
  color: ${(props) =>
    props.$isHead
      ? props.theme.colors.gray[600]
      : props.theme.colors.gray[800]};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &.number {
    width: 128px;
  }
  &.title {
    width: 501px;
    cursor: ${(props) => (props.$isHead ? 'default' : 'pointer')};
  }
  &.writer {
    width: 142px;
  }
  &.likeCount {
    width: 102px;
  }
  &.createAt {
    width: 187px;
  }
`;

export const StyledMobileRow = styled.div<{ $isHead?: boolean }>`
  width: 335px;
  height: 65px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray[100]};
  display: none;
  cursor: pointer;
  ${props => {
    const displayValue = props.$isHead ? 'none' : 'block';
    return media('mobile')`
      display: ${displayValue};
    `;
  }}
`;

export const StyledContent = styled.div`
  width: 100%;
  height: 56px;
  margin: 19px auto;
`;

export const StyledTitle = styled.h3`
  font: ${(props) => props.theme.fonts['pretendard/lg-16px-regular']};
  margin-bottom: 7px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const StyledInfo = styled.div`
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

export const StyledInfoContainer1 = styled.div`
  width: 100%;
  height: 17px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInfoContainer2 = styled.div`
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const StyledLikesContainer = styled.div`
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