import React, { useEffect, useState } from 'react';
import { postArticle } from '@api/article';
import UploadBoardUI from './UpLoadBoardUI';

const UploadBoardContainer: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);
    setDate(formattedDate);
  }, []);

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitPost = async () => {
    const payload = {
      image: 'https://example.com/image.jpg', // 임시
      content: content,
      title: title,
    };

    try {
      const response = await postArticle(payload);
      const articleId = `${response.id}`;
      console.log('게시물 등록 성공:', response);
      alert('게시물이 등록되었습니다.');
      window.location.href = `/boards/${articleId}`;
    } catch (error) {
      console.error('게시물 등록 실패:', error);
      alert('게시물 등록에 실패했습니다.');
    }
  };

  const handleSave = () => {
    submitPost();
  };

  const handleCancel = () => {
    if (
      window.confirm(
        '정말 취소하시겠습니까? 작성 중인 내용은 저장되지 않습니다.',
      )
    ) {
      setTitle('');
      setContent('');
    }
  };

  const totalChars = content.length;
  const nonSpaceChars = content.replace(/\s/g, '').length;

  return (
    <UploadBoardUI
      date={date}
      title={title}
      content={content}
      titleLength={title.length}
      totalChars={totalChars}
      nonSpaceChars={nonSpaceChars}
      onTitleChange={handleTitleChange}
      onContentChange={handleContentChange}
      onSubmit={submitPost}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default UploadBoardContainer;
