import { BoardWrapper } from './BoardUI.styled';
import CommentSectionContainer from './CommentSection/CommentSectionContainer';
import PostContainer from './Post/PostContainer';

const Board = () => {
  return (
    <main className='layoutWrap'>
      <BoardWrapper>
        <PostContainer />
        <CommentSectionContainer />
      </BoardWrapper>
    </main>
  );
};

export default Board;
