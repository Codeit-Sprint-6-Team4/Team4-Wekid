import { Helmet } from 'react-helmet-async';
import BoardUI from './components/BoardUI';

const Board = () => {
  return (
    <>
      <Helmet>
        <title>Wikied - 자유게시판</title>
        <meta
          name="description"
          content="위키드에 자유롭게 글을 적으세요. 자유게시판 바로가기"
        />
        <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
      </Helmet>
      <BoardUI/>
    </>
  );
};

export default Board;
