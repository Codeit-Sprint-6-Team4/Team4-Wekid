import styled from 'styled-components';
import { media } from '@utils/media';

export const StyledBoardsContainer = styled.div`
  width: 1060px;
  margin: 60px auto;

  ${media('tablet')`
    width: 624px;
  `}
  ${media('mobile')`
    width: 335px;
  `}
`;

export const StyledBoardsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBoardsTitle = styled.span`
  font: ${(props) => props.theme.fonts['pretendard/3xl-32px-semibold']}
`;

export const StyledBestArticleContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  ${media('tablet')`
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    > * {
      margin-bottom: 20px;
    }
  `}
  ${media('mobile')`
    flex-wrap: nowrap;
    overflow-x: auto;
    & > * {
      flex: 0 0 auto;
      margin-right: 20px;
  }
  `}

`;

export const StyledBoardsFilterBar = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 60px;
  margin-bottom: 22.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media('mobile')`
    height: 110px;
    flex-wrap: wrap;
     > * {
      margin-bottom: 20px;
    }
  `}
`;

export const StyledBoardsTableContainer = styled.div`
  margin: 60px auto;
  ${media('mobile')`
    margin: 30px auto;
  `}
`;