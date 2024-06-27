import React, { useState } from 'react';
import PostUI from './PostUI';

const PostContainer: React.FC = () => {
  const [likes, setLikes] = useState(300);
  const [post, setPost] = useState({
    title: '게시물 제목입니다.',
    author: '박동욱',
    date: '2024.02.24',
    body: '사용자가 작성한 게시물 내용이 보여집니다.',
  });

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleEdit = () => {
    // 수정 기능
  };

  const handleDelete = () => {
    // 삭제 기능
  };

  return (
    <PostUI
      post={post}
      likes={likes}
      onLike={handleLike}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default PostContainer;
