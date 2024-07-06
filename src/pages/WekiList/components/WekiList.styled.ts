import NoResultImage from 'public/assets/images/wekiList-noData-image.png';
import styled from 'styled-components';
import { media } from '@utils/media';

export const StyledWekiListPageContainer = styled.div`
  width: 100%;
`;

export const StyledSearchBarAndResultContainer = styled.div`
  height: 87px;
`

export const StyledSearchResultsMessage = styled.div`
  font: ${(props) => props.theme.fonts['pretendard/lg-16px-regular']};
  color: ${(props) => props.theme.colors.gray[600]};
  margin-top: 16px;
  > span {
    color: ${(props) => props.theme.colors.main[500]};
  }
`;

export const StyledNoResultContainer = styled.div`
  margin: 204px auto;
`;

export const StyledSearchNoResultsMessage = styled.div`
  font: ${(props) => props.theme.fonts['pretendard/lg-16px-regular']};
  color: ${(props) => props.theme.colors.gray[600]};
  margin: 0 auto;
  text-align: center;
`;

export const StyledNoResultImage = styled.div`
  width: 144px;
  height: 144px;
  margin: 32px auto;
  background-image: url(${NoResultImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledWekiListContainer = styled.div`
  margin-top: 57px;
  margin-bottom: 121px;
  height: 474px;
  ${media('tablet')`
    margin-bottom: 81px;
  `}
  ${media('mobile')`
  margin-top: 4rem;
    margin-bottom: 54px;
  `}
`;

export const StyledUserCardWrapper = styled.div`
  cursor: pointer;
`;
