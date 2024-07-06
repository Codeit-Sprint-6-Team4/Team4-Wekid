import styled from 'styled-components';
import { media } from '@utils/media';

export const StyledBoardsContainer = styled.div`
  width: 100%;
`;

export const StyledBoardsContainer2 = styled.div`
  width: 100%;
  margin: 0px auto;
`;

export const StyledBoardsTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledBoardsTitle = styled.span`
  font: ${(props) => props.theme.fonts['pretendard/3xl-32px-semibold']};
`;

export const StyledBestArticleContainer = styled.div`
  margin-top: 60px;
  gap: 1.6rem;
  width: 100%;
  margin: 60px auto 0px;
  display: flex;
  justify-content: space-between;
//   gap: 16px;

  ${media('tablet')`
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    > * {
    width: calc(50% - 8px);
      margin-bottom: 20px;
    }
  `}
  ${media('mobile')`
     margin: 40px auto 0px;
    width: 100%; 
    flex-wrap: nowrap;
    overflow-x: auto;
    & > * {
      flex: 0 0 250px;
      margin-right: 20px;
    }
    -ms-overflow-style: none;

    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }
  `}
`;

export const StyledBoardsFilterBar = styled.div`
  flex: 1 0;
  width: 100%;
  height: 45px;
  margin-top: 60px;
  margin-bottom: 22.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  ${media('mobile')`
    height: auto;
    flex-wrap: wrap;
    gap: 1rem 1.5rem;
    margin-top: 4rem;
  `}
`;

export const StyledBoardsTableContainer = styled.div`
  height: 540px;
  margin: 60px auto;
  ${media('mobile')`
    margin: 30px auto;
    height: 820px;
  `}
`;
