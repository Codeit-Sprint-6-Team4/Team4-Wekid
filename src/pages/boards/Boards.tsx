import React, { useEffect, useState } from 'react';
import { getArticles } from '@api/article';
import Button from '@components/button/Button';
import SeacrhBar from '@components/searchInput/SeacrhBar';
import ArticleRow from './components/ArticleRow';
import BestArticleCard from './components/BestArticleCard';
import {
  StyledBestArticleContainer,
  StyledBoardsContainer,
  StyledBoardsFilterBar,
  StyledBoardsTableContainer,
  StyledBoardsTitle,
  StyledBoardsTitleContainer,
} from './components/Boards.styled';
import Pagination from '@components/pagination/Pagination';
import SortDropdown from '@pages/Boards/components/SortDropdown';
import { useNavigate } from 'react-router-dom';

interface Writer {
  name: string;
  id: number;
}
export interface Article {
  id: number;
  title: string;
  image: string;
  writer: Writer;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
}

interface ArticlesResponse {
  totalCount: number;
  list: Article[];
}

const Boards = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const [sortType, setSortType] = useState<'recent' | 'like'>('recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sortOptions = [
    { id: 1, label: '최신순' },
    { id: 2, label: '좋아요순' },
  ];
  const handleNavigateToAddBoard = () => {
    navigate('/addboard'); 
  };
  const handleSelectSortOption = (option: { id: number; label: string }) => {
    setSortType(option.label === '최신순' ? 'recent' : 'like');
    setCurrentPage(1);
  };

  const fetchArticles = async () => {
    try {
      const { data } = await getArticles(
        currentPage,
        itemsPerPage,
        sortType,
        searchKeyword,
      );
      setArticles(data.list);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error('게시글을 불러오는데 실패했습니다.', error);
    }
  };

  const fetchBestArticles = async () => {
    try {
      const { data } = await getArticles(1, 10, 'like');
      setBestArticles(data.list.slice(0, 4));
    } catch (error) {
      console.error('베스트 게시글을 불러오는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [currentPage, sortType]);

  useEffect(() => {
    fetchBestArticles();
  }, []);

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = () => {
    setCurrentPage(1);
    fetchArticles();
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchArticles();
  };

  return (
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
      <StyledBestArticleContainer>
        {bestArticles.map((article) => (
          <BestArticleCard key={article.id} article={article} />
        ))}
      </StyledBestArticleContainer>
      <StyledBoardsFilterBar>
        <SeacrhBar
          placeholder="제목을 검색해 주세요"
          onChange={handleSearchChange}
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
        <SortDropdown options={sortOptions} onSelect={handleSelectSortOption} />
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
          />
        ))}
      </StyledBoardsTableContainer>
      <Pagination
        totalCount={totalCount}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </StyledBoardsContainer>
  );
};

export default Boards;
