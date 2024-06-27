import React, { useState } from 'react';
import CommentSectionUI from './CommentSectionUI';

const CommentSectionContainer: React.FC = () => {
  const [comments, setComments] = useState([
    { id: 1, author: '홍길동', date: '2024.03.09', text: '작성자가 쓴 댓글 내용' },
    // 다른 댓글들 추가
  ]);

  const handleAddComment = (text: string) => {
    const newComment = {
      id: comments.length + 1,
      author: '새로운 작성자', // 실제 작성자 이름을 넣어야 합니다.
      date: new Date().toISOString().split('T')[0], // 현재 날짜를 넣어야 합니다.
      text,
    };
    setComments([...comments, newComment]);
  };

  return (
    <CommentSectionUI comments={comments} onAddComment={handleAddComment} />
  );
};

export default CommentSectionContainer;
