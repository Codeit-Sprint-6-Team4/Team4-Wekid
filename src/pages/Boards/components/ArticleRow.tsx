import React, { useEffect, useState } from 'react';
import { StyledColumn, StyledContent, StyledHeartIcon, StyledInfo, StyledInfoContainer1, StyledInfoContainer2, StyledLikesContainer, StyledMobileRow, StyledRow, StyledTitle } from './ArticleRow.styled';
import { useNavigate } from 'react-router-dom';
import { fetchArticle } from '@api/article';
import { AxiosError } from 'axios';
import { userType } from '@api/user';

interface ArticleRowProps {
  $isHead?: boolean;
  number: string;
  id?: number;
  title: string;
  writer: string;
  likeCount: string;
  createAt: string;
  myUserData?: userType | null;
}

const ArticleRow: React.FC<ArticleRowProps> = ({
  $isHead,
  number,
  id,
  title,
  writer,
  likeCount,
  createAt,
  myUserData,
}) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = () => {
    if (!$isHead && id) {
      navigate(`/boards/${id}`);
    }
  };

  const getArticle = async (articleId: string) => {
    try {
      const data = await fetchArticle(articleId);
      setIsLiked(data.isLiked);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    }
  };

  useEffect(() => {
    if (myUserData) {
      getArticle(String(id));
    }
  }, []);

  return (
    <>
      <StyledRow $isHead={$isHead}>
        <StyledColumn className="number" $isHead={$isHead}>
          {number}
        </StyledColumn>
        <StyledColumn className="title" $isHead={$isHead} onClick={handleClick}>
          {title}
        </StyledColumn>
        <StyledColumn className="writer" $isHead={$isHead}>
          {writer}
        </StyledColumn>
        <StyledColumn className="likeCount" $isHead={$isHead}>
          {likeCount}
        </StyledColumn>
        <StyledColumn className="createAt" $isHead={$isHead}>
          {createAt}
        </StyledColumn>
      </StyledRow>

      
      <StyledMobileRow $isHead={$isHead} onClick={handleClick}>
      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledInfoContainer1>
          <StyledInfoContainer2>
            <StyledInfo className="writer">
              {writer}
            </StyledInfo>
            <StyledInfo>{createAt}</StyledInfo>
          </StyledInfoContainer2>
          <StyledLikesContainer>
            <StyledHeartIcon $isLiked={isLiked}/>
            <StyledInfo>{likeCount}</StyledInfo>
          </StyledLikesContainer>
        </StyledInfoContainer1>
      </StyledContent>
      </StyledMobileRow>
    </>
  );
};

export default ArticleRow;
