import React, { useState } from 'react';
import { formatDateString } from '@utils/formatDateString';
import { Article } from './BoardsContainer';
import {
  StyledCardContainer,
  StyledCardContent,
  StyledCardImage,
  StyledCardNoImage,
  StyledCardInfo,
  StyledCardInfoContainer1,
  StyledCardInfoContainer2,
  StyledCardLikesContainer,
  StyledCardTitle,
  StyledHeartIcon,
  StyledNoImageIcon,
} from '@pages/Boards/components/BestArticleCard.styled';
import { useNavigate } from 'react-router-dom';

interface BestPostCardProps {
  article: Article;
}

const BestArticleCard: React.FC<BestPostCardProps> = ({ article }) => {
  const navigate = useNavigate();
  const formattedDate = formatDateString(article.createdAt);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };
  

  const handleClick = () => {
    navigate(`/boards/${article.id}`);
  };

  return (
    <StyledCardContainer onClick={handleClick}>
       {!imageError && article.image ? (
        <StyledCardImage
          src={article.image}
          alt={article.title}
          onError={handleImageError}
        />
      ) : (
        <StyledCardNoImage>
          <StyledNoImageIcon />
        </StyledCardNoImage>
      )}
      <StyledCardContent>
        <StyledCardTitle>{article.title}</StyledCardTitle>
        <StyledCardInfoContainer1>
          <StyledCardInfoContainer2>
            <StyledCardInfo className="writer">
              {article.writer.name}
            </StyledCardInfo>
            <StyledCardInfo>{formattedDate}</StyledCardInfo>
          </StyledCardInfoContainer2>
          <StyledCardLikesContainer>
            <StyledHeartIcon />
            <StyledCardInfo>{article.likeCount}</StyledCardInfo>
          </StyledCardLikesContainer>
        </StyledCardInfoContainer1>
      </StyledCardContent>
    </StyledCardContainer>
  );
};

export default BestArticleCard;
