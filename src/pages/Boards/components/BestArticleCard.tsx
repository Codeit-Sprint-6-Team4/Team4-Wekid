import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { fetchArticle } from '@api/article';
import { userType } from '@api/user';
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
import { formatDateString } from '@utils/formatDateString';
import { Article } from './BoardsContainer';

interface BestPostCardProps {
  article: Article;
  myUserData: userType | null;
}

const BestArticleCard: React.FC<BestPostCardProps> = ({
  article,
  myUserData,
}) => {
  const navigate = useNavigate();
  const formattedDate = formatDateString(article.createdAt);
  const [imageError, setImageError] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLiked, setIsLiked] = useState(false);

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
      getArticle(String(article.id));
    }
  }, []);

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
            <StyledHeartIcon $isLiked={isLiked}/>
            <StyledCardInfo>{article.likeCount}</StyledCardInfo>
          </StyledCardLikesContainer>
        </StyledCardInfoContainer1>
      </StyledCardContent>
    </StyledCardContainer>
  );
};

export default BestArticleCard;
