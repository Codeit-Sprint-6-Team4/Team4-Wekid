import React from 'react';
import { formatDateString } from '@utils/formatDateString';
import { Article } from './BoardsContainer';
import {
  StyledCardContainer,
  StyledCardContent,
  StyledCardImage,
  StyledCardInfo,
  StyledCardInfoContainer1,
  StyledCardInfoContainer2,
  StyledCardLikesContainer,
  StyledCardTitle,
  StyledHeartIcon,
} from '@pages/Boards/components/BestArticleCard.styled';
import { useNavigate } from 'react-router-dom';

interface BestPostCardProps {
  article: Article;
}

const BestArticleCard: React.FC<BestPostCardProps> = ({ article }) => {
  const navigate = useNavigate();
  const formattedDate = formatDateString(article.createdAt);

  const handleClick = () => {
    navigate(`/boards/${article.id}`);
  };

  return (
    <StyledCardContainer onClick={handleClick}>
      <StyledCardImage src={article.image} alt={article.title} />
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
