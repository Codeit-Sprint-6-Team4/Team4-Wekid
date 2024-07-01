import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentSectionUI from './CommentSectionUI';
import { getComment, postComment, deleteComment, patchComment, getAllComments } from '@api/comment';

interface Comment {
  id: number;
  author: string;
  date: string;
  text: string;
  image?: string;
}

const CommentSectionContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [cursor, setCursor] = useState<number | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [totalComments, setTotalComments] = useState<number>(0); // 총 댓글 수 상태 추가
  const limit = 10; // 가져올 댓글 수

  const fetchComments = async () => {
    if (id) {
      try {
        const data = await getComment(id, limit, cursor || undefined);
        const formattedComments = data.list.map((item: any) => ({
          id: item.id,
          author: item.writer.name,
          date: new Date(item.createdAt).toLocaleDateString(), // 날짜 형식 변환
          text: item.content,
          image: item.writer.image, // 작성자의 프로필 이미지
        }));
        setComments(prev => {
          const uniqueComments = [...prev, ...formattedComments].filter(
            (item, index, self) => self.findIndex(c => c.id === item.id) === index
          );
          return uniqueComments;
        });
        setCursor(data.nextCursor);
        setHasMore(data.nextCursor !== null);
      } catch (error) {
        console.error('Failed to fetch comments', error);
        setComments([]); // 에러가 발생하면 빈 배열로 설정
      }
    } else {
      console.error('Article ID is missing');
    }
  };

  const fetchTotalComments = async () => {
    if (id) {
      try {
        const total = await getAllComments(id);
        setTotalComments(total);
      } catch (error) {
        console.error('Failed to fetch total comments', error);
      }
    }
  };

  const addComment = async (text: string) => {
    if (id) {
      try {
        await postComment(id, text);
        setCursor(null); // 새로운 댓글을 불러올 때 cursor를 초기화
        setComments([]); // 기존 댓글을 초기화
        await fetchComments(); // 새로 댓글 목록 불러오기
        await fetchTotalComments(); // 댓글 수 업데이트
      } catch (error) {
        console.error('Failed to post comment', error);
      }
    }
  };

  const updateComment = async (commentId: number, text: string) => {
    try {
      await patchComment(commentId.toString(), text);
      setComments(prev => prev.map(comment => comment.id === commentId ? { ...comment, text } : comment));
    } catch (error) {
      console.error('Failed to update comment', error);
    }
  };

  const removeComment = async (commentId: number) => {
    try {
      await deleteComment(commentId.toString());
      setComments(prev => prev.filter(comment => comment.id !== commentId));
      await fetchTotalComments(); // 댓글 삭제 후 댓글 수 업데이트
    } catch (error) {
      console.error('Failed to delete comment', error);
    }
  };

  useEffect(() => {
    fetchComments();
    fetchTotalComments(); // 컴포넌트 마운트 시 전체 댓글 수 가져오기
  }, [id]);

  return (
    <CommentSectionUI 
      comments={comments} 
      fetchComments={fetchComments} 
      hasMore={hasMore} 
      addComment={addComment} 
      updateComment={updateComment} 
      removeComment={removeComment} 
      totalComments={totalComments} // 총 댓글 수 전달
    />
  );
};

export default CommentSectionContainer;
