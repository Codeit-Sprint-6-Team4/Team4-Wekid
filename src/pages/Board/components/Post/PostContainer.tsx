import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import {
  fetchArticle,
  postArticleLike,
  deleteArticleLike,
  deleteArticle,
} from '@api/article';
// useGetUserData 훅 import
import Modal from '@components/modal/Modal';
import useGetUserData from '@hooks/useGetUserData';
import PostUI from './PostUI';

const PostContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    writer: { id: '', name: '' },
    createdAt: '',
    content: '',
    likeCount: 0,
    isLiked: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isMyPost, setIsMyPost] = useState(false); // 상태 추가
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const { myUserData } = useGetUserData(); // useGetUserData 훅 사용

  const getArticle = async (articleId: string) => {
    try {
      const data = await fetchArticle(articleId);
      setPost({
        title: data.title,
        writer: data.writer,
        createdAt: data.createdAt,
        content: data.content,
        likeCount: data.likeCount,
        isLiked: data.isLiked,
      });

      if (myUserData) {
        setIsMyPost(myUserData.id === data.writer.id); // 현재 사용자의 ID와 작성자의 ID 비교
      }

      setLoading(false);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getArticle(id);
    } else {
      setError('Article ID is missing');
      setLoading(false);
      navigate('/'); // Navigate to another page if ID is missing
    }
  }, [id, navigate, myUserData]);

  const handleLikeToggle = async () => {
    if (!id) return;

    if (!myUserData) {
      setShowLoginPrompt(true);
      return;
    }

    try {
      if (post.isLiked) {
        await deleteArticleLike(id);
      } else {
        await postArticleLike(id);
      }
      await getArticle(id); // 좋아요 상태를 변경한 후 최신 데이터를 다시 가져옵니다.
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    try {
      await deleteArticle(id);
      navigate('/boards'); // 게시물 삭제 후 목록 페이지로 이동
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    }
  };

  const handleEdit = () => {
    navigate('/addboard', { state: { post } });
  };

  const handleModalClose = () => {
    setShowLoginPrompt(false);
  };
  const navigateToLogin = () => {
    navigate('/login');
    handleModalClose();
  };

  if (loading) return <p>로딩중</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <PostUI
        post={post}
        likes={post.likeCount}
        onLike={handleLikeToggle} // 좋아요 토글 기능을 추가
        onEdit={handleEdit} // 수정 기능을 구현할 경우 추가
        onDelete={handleDelete} // 삭제 기능 추가
        isMyPost={isMyPost} // 본인 게시글 여부 추가
      />
      {showLoginPrompt && (
        <Modal
          type="loginPrompt"
          onClose={handleModalClose}
          navigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
};

export default PostContainer;
