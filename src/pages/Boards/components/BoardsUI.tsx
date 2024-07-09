import React from 'react';
import { userType } from '@api/user';
import Button from '@components/button/Button';
import Pagination from '@components/pagination/Pagination';
import SeacrhBar from '@components/searchInput/SeacrhBar';
import SortDropdown from '@pages/Boards/components/SortDropdown';
import ArticleRow from './ArticleRow';
import BestArticleCard from './BestArticleCard';
import {
  StyledBestArticleContainer,
  StyledBoardsContainer,
  StyledBoardsContainer2,
  StyledBoardsFilterBar,
  StyledBoardsTableContainer,
  StyledBoardsTitle,
  StyledBoardsTitleContainer,
} from './Boards.styled';
import { Article } from './BoardsContainer';

interface BoardsUIProps {
  myUserData: userType | null;
  articles: Article[];
  bestArticles: Article[];
  handleNavigateToAddBoard: () => void;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  searchKeyword: string;
  handleSearchSubmit: () => void;
  sortOptions: { id: number; label: string }[];
  handleSelectSortOption: (option: { id: number; label: string }) => void;
  totalCount: number;
  currentPage: number;
  itemsPerPage: number;
  handlePageChange: (page: number) => void;
}

const BoardsUI: React.FC<BoardsUIProps> = ({
  myUserData,
  articles,
  bestArticles,
  handleNavigateToAddBoard,
  handleSearchChange,
  searchKeyword,
  handleSearchSubmit,
  sortOptions,
  handleSelectSortOption,
  totalCount,
  currentPage,
  itemsPerPage,
  handlePageChange,
}) => {
  return (
    <main className="layoutWrap">
      <StyledBoardsContainer>
        <StyledBoardsTitleContainer>
          <StyledBoardsTitle>베스트 게시글</StyledBoardsTitle>
          <Button
            $primary
            $width="160px"
            $height="45px"
            $mobileWidth="130px"
            onClick={handleNavigateToAddBoard}
          >
            게시물 등록하기
          </Button>
        </StyledBoardsTitleContainer>
      </StyledBoardsContainer>
      <StyledBestArticleContainer>
        {bestArticles.map((article) => (
          <BestArticleCard
            myUserData={myUserData}
            key={article.id}
            article={article}
          />
        ))}
      </StyledBestArticleContainer>
      <StyledBoardsContainer2>
        <StyledBoardsFilterBar>
          <SeacrhBar
            placeholder="제목을 검색해 주세요"
            onChange={handleSearchChange}
            onSearch={handleSearchSubmit}
            value={searchKeyword}
          ></SeacrhBar>
          <Button
            $primary
            $width="80px"
            $height="45px"
            onClick={handleSearchSubmit}
          >
            검색
          </Button>
          <SortDropdown
            options={sortOptions}
            onSelect={handleSelectSortOption}
          />
        </StyledBoardsFilterBar>
        <StyledBoardsTableContainer>
          <ArticleRow
            $isHead
            number="번호"
            title="제목"
            writer="작성자"
            likeCount="좋아요"
            createAt="날짜"
          />
          {articles.map((article, index) => (
            <ArticleRow
              key={article.id}
              id={article.id}
              number={String(
                totalCount - (currentPage - 1) * itemsPerPage - index,
              )}
              title={article.title}
              writer={article.writer.name}
              likeCount={String(article.likeCount)}
              createAt={new Date(article.createdAt).toLocaleDateString()}
              myUserData={myUserData}
            />
          ))}
        </StyledBoardsTableContainer>
        <Pagination
          totalCount={totalCount}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </StyledBoardsContainer2>
    </main>
  );
};

export default BoardsUI;
