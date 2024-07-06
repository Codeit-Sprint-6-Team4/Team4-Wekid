import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getArticles } from '@api/article';
import Modal from '@components/modal/Modal';
import useGetUserData from '@hooks/useGetUserData';
import BoardsUI from './BoardsUI';

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

const BoardsContainer = () => {
  const navigate = useNavigate();
  const { myUserData } = useGetUserData();
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [bestArticles, setBestArticles] = useState<Article[]>([]);
  const [sortType, setSortType] = useState<'recent' | 'like'>('recent');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState<number>(() => {
    const savedPage = sessionStorage.getItem('boardsCurrentPage');
    return savedPage ? Number(savedPage) : 1;
  });
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const itemsPerPage = 10;

  const sortOptions = [
    { id: 1, label: '최신순' },
    { id: 2, label: '좋아요순' },
  ];

  const handleNavigateToAddBoard = () => {
    if (!myUserData) {
      setShowLoginPrompt(true);
    } else {
      navigate('/boards/upload');
    }
  };
  const handleModalClose = () => {
    setShowLoginPrompt(false);
  };
  const navigateToLogin = () => {
    navigate('/login');
    handleModalClose();
  };

  const handleSelectSortOption = (option: { id: number; label: string }) => {
    setSortType(option.label === '최신순' ? 'recent' : 'like');
    setCurrentPage(1);
  };

  const fetchArticles = async () => {
    try {
      setArticles([]);
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
    sessionStorage.setItem('boardsCurrentPage', String(currentPage));
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
  };

  return (
    <>
      <BoardsUI
        myUserData={myUserData}
        articles={articles}
        bestArticles={bestArticles}
        handleNavigateToAddBoard={handleNavigateToAddBoard}
        handleSearchChange={handleSearchChange}
        searchKeyword={searchKeyword}
        handleSearchSubmit={handleSearchSubmit}
        sortOptions={sortOptions}
        handleSelectSortOption={handleSelectSortOption}
        totalCount={totalCount}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
      />
      {showLoginPrompt && (
        <Modal
          type="loginPrompt"
          onClose={handleModalClose}
          navigateToLogin={navigateToLogin}
        />
      )}
    </>
  );
};

export default BoardsContainer;
