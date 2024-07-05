import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '@utils/media';
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
    <>
      <Helmet>
        <title>자유게시글</title>
        <meta
          name="description"
          content="위키드에 자유롭게 글을 적으세요. 자유게시판 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <BoardContainer>
        <PostContainer />
        <CommentSectionContainer />
      </BoardContainer>
    </>
  );
};

export default Board;
