import React from 'react';
import styled from 'styled-components';
import { media } from '@utils/media';
// import { theme } from '@styles/theme';
import CommentSectionContainer from './components/CommentSection/CommentSectionContainer';
import PostContainer from './components/Post/PostContainer';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6rem;
  ${media('tablet')`
    gap: 4rem;
  `}
  ${media('mobile')`
     gap: 3.5rem;
  `}
`;

const Board = () => {
  return (
    <BoardContainer>
      <PostContainer />
      <CommentSectionContainer />
    </BoardContainer>
  );
};

export default Board;
