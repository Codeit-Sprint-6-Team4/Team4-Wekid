import React from 'react';
import styled from 'styled-components';
// import { theme } from '@styles/theme';
import CommentSectionContainer from './components/CommentSection/CommentSectionContainer';
import PostContainer from './components/Post/PostContainer';

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  padding: 4rem 12rem;
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
