import React from 'react';
import { Helmet } from 'react-helmet';
import UploadBoardContainer from './components/UpLoadBoardContainer';

const UpLoadBoard = () => {
  <Helmet>
    <title>Wikied - 자유게시글</title>
    <meta name="description" content="위키드에 자유롭게 글을 적어보세요." />
    <meta name="keywords" content="위키드, 나만의 위키, 위키 커뮤니티" />
  </Helmet>;
  return <UploadBoardContainer />;
};

export default UpLoadBoard;
