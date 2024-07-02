import React, { useEffect, useState } from 'react';
import BoardUI from './BoardUI';

const BoardContainer: React.FC = () => {
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

  const submitPost = () => {
    alert('게시물이 등록되었습니다.');
  };

  const totalChars = content.length;
  const nonSpaceChars = content.replace(/\s/g, '').length;

  return (
    <BoardUI
      date={date}
      title={title}
      content={content}
      titleLength={title.length}
      totalChars={totalChars}
      nonSpaceChars={nonSpaceChars}
      onTitleChange={handleTitleChange}
      onContentChange={handleContentChange}
      onSubmit={submitPost}
    />
  );
};

export default BoardContainer;
