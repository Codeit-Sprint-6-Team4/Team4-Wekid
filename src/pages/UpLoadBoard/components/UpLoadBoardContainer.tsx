import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchArticle, postArticle, patchArticle } from '@api/article';
import Modal from '@components/modal/Modal';
import UploadBoardUI from './UpLoadBoardUI';

const UploadBoardContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [originalTitle, setOriginalTitle] = useState<string>('');
  const [originalContent, setOriginalContent] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [totalChars, setTotalChars] = useState<number>(0);
  const [nonSpaceChars, setNonSpaceChars] = useState<number>(0);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [redirectPath, setRedirectPath] = useState<string>('');

  const isDirty = useRef(false);

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}.${String(
      currentDate.getMonth() + 1,
    ).padStart(2, '0')}.${String(currentDate.getDate()).padStart(2, '0')}`;
    setDate(formattedDate);

    if (id) {
      fetchArticleData(id);
      setIsEditMode(true);
    }

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty.current) {
        event.preventDefault();
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [id]);

  const fetchArticleData = async (articleId: string) => {
    try {
      const article = await fetchArticle(articleId);
      setTitle(article.title);
      setContent(article.content);
      setOriginalTitle(article.title);
      setOriginalContent(article.content);
      const textContent = article.content.replace(/<[^>]*>/g, '');
      setTotalChars(textContent.length);
      setNonSpaceChars(textContent.replace(/\s/g, '').length);
    } catch (error) {
      console.error('Failed to fetch article:', error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    isDirty.current = true;
  };

  const handleContentChange = (value: string) => {
    setContent(value);
    const textContent = value.replace(/<[^>]*>/g, '');
    setTotalChars(textContent.length);
    setNonSpaceChars(textContent.replace(/\s/g, '').length);
    isDirty.current = true;
  };

  const handleSubmit = async () => {
    const payload = { title, content };

    try {
      if (isEditMode && id) {
        await patchArticle(id, payload);
        alert('게시물이 수정되었습니다.');
        navigate(`/boards/${id}`);
      } else {
        const response = await postArticle(payload);
        const articleId = `${response.id}`;
        alert('게시물이 등록되었습니다.');
        navigate(`/boards/${articleId}`);
      }
      isDirty.current = false;
    } catch (error) {
      console.error('게시물 저장 실패:', error);
      alert('게시물 저장에 실패했습니다.');
    }
  };

  const handleNavigation = (path: string) => {
    if (
      isDirty.current &&
      (title !== originalTitle || content !== originalContent)
    ) {
      setRedirectPath(path);
      setShowModal(true);
    } else {
      navigate(path);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate(redirectPath);
  };

  return (
    <>
      <UploadBoardUI
        date={date}
        title={title}
        content={content}
        titleLength={title.length}
        totalChars={totalChars}
        nonSpaceChars={nonSpaceChars}
        onTitleChange={handleTitleChange}
        onContentChange={handleContentChange}
        onSubmit={handleSubmit}
        onSave={handleSubmit}
        onCancel={() => handleNavigation('/boards')}
      />
      {showModal && (
        <Modal
          type="cancelSave"
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
        />
      )}
    </>
  );
};

export default UploadBoardContainer;
