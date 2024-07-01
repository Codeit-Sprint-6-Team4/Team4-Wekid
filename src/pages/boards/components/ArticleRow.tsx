import React from 'react';
import { StyledColumn, StyledContent, StyledHeartIcon, StyledInfo, StyledInfoContainer1, StyledInfoContainer2, StyledLikesContainer, StyledMobileRow, StyledRow, StyledTitle } from './ArticleRow.styled';
import { useNavigate } from 'react-router-dom';

interface ArticleRowProps {
  $isHead?: boolean;
  number: string;
  id?: number;
  title: string;
  writer: string;
  likeCount: string;
  createAt: string;
}

const ArticleRow: React.FC<ArticleRowProps> = ({
  $isHead,
  number,
  id,
  title,
  writer,
  likeCount,
  createAt,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!$isHead && id) {
      navigate(`/boards/${id}`);
    }
  };
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
            <StyledHeartIcon />
            <StyledInfo>{likeCount}</StyledInfo>
          </StyledLikesContainer>
        </StyledInfoContainer1>
      </StyledContent>
      </StyledMobileRow>
    </>
  );
};

export default ArticleRow;
