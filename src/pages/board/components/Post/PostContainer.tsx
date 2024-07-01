import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostUI from './PostUI';
import { fetchArticle, postArticleLike, deleteArticleLike } from '@api/article';
import { AxiosError } from 'axios';

const PostContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    writer: { name: '' },
    createdAt: '',
    content: '',
    likeCount: 0,
    isLiked: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArticle = async (articleId: string) => {
      try {
        const data = await fetchArticle(articleId);
        setPost({
          title: data.title,
          writer: data.writer,
          createdAt: data.createdAt,
          content: data.content,
          likeCount: data.likeCount,
          isLiked: data.isLiked, // 서버로부터 isLiked 정보를 받아 설정합니다.
        });
        setLoading(false);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
        setLoading(false);
      }
    };

    if (id) {
      getArticle(id);
    } else {
      setError('Article ID is missing');
      setLoading(false);
      navigate('/'); // Navigate to another page if ID is missing
    }
  }, [id, navigate]);

  const handleLikeToggle = async () => {
    if (!id) return;
    
    try {
      if (post.isLiked) {
        await deleteArticleLike(id);
        setPost(prevPost => ({
          ...prevPost,
          likeCount: prevPost.likeCount - 1,
          isLiked: false,
        }));
      } else {
        await postArticleLike(id);
        setPost(prevPost => ({
          ...prevPost,
          likeCount: prevPost.likeCount + 1,
          isLiked: true,
        }));
      }
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    }
  };

  if (loading) return <p>로딩중</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <PostUI
      post={post}
      likes={post.likeCount}
      onLike={handleLikeToggle} // 좋아요 토글 기능을 추가
      onEdit={() => {}} // 수정 기능을 구현할 경우 추가
      onDelete={() => {}} // 삭제 기능을 구현할 경우 추가
    />
  );
};

export default PostContainer;