import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSectionUI from './CommentSectionUI';
import { getComment } from '@api/comment';

interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
  image?: string; // 작성자의 프로필 이미지
}

const CommentSectionContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const limit = 10; // 가져올 댓글 수

  const fetchComments = async () => {
    if (id) {
      try {
        console.log(`Fetching comments for article ID: ${id}`); // id 값 확인 로그
        const data = await getComment(id, limit);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedComments = data.map((item: any) => ({
          id: item.id,
          author: item.writer.name,
          date: new Date(item.createdAt).toLocaleDateString(), // 날짜 형식 변환
          text: item.content,
          image: item.writer.image, // 작성자의 프로필 이미지
        }));
        setComments(formattedComments);
      } catch (error) {
        console.error('Failed to fetch comments', error);
        setComments([]); // 에러가 발생하면 빈 배열로 설정
      }
    } else {
      console.error('Article ID is missing');
    }
  };

  useEffect(() => {
    fetchComments();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <CommentSectionUI comments={comments} fetchComments={fetchComments} />
  );
};

export default CommentSectionContainer;
