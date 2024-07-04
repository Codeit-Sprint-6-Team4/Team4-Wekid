import { Helmet } from 'react-helmet';
import BoardsContainer from './components/BoardsContainer';

const Boards = () => {
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
      <BoardsContainer />
    </>
  );
};

export default Boards;
