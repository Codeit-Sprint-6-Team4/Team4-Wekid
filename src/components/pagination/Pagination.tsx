import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledPaginationButton } from '@components/pagination/paginationButton';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

interface PaginationProps {
  totalCount: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageGroupSize = 5;
  const pageCount = Math.ceil(totalCount / itemsPerPage);
  const maxPageGroupCount = Math.ceil(pageCount / pageGroupSize);
  const [pageGroupIndex, setPageGroupIndex] = useState(
    Math.floor((currentPage - 1) / pageGroupSize),
  );

  useEffect(() => {
    setPageGroupIndex(Math.floor((currentPage - 1) / pageGroupSize));
  }, [currentPage]);

  const pages = Array.from(
    {
      length: Math.min(
        pageGroupSize,
        pageCount - pageGroupSize * pageGroupIndex,
      ),
    },
    (_, i) => i + 1 + pageGroupSize * pageGroupIndex,
  );

  const handlePrevGroup = () => {
    const newPageGroupIndex = Math.max(pageGroupIndex - 1, 0);
    setPageGroupIndex(newPageGroupIndex);
    onPageChange(newPageGroupIndex * pageGroupSize + pageGroupSize);
  };

  const handleNextGroup = () => {
    const newPageGroupIndex = Math.min(
      pageGroupIndex + 1,
      maxPageGroupCount - 1,
    );
    setPageGroupIndex(newPageGroupIndex);
    onPageChange(newPageGroupIndex * pageGroupSize + 1);
  };

  return (
    <PaginationContainer>
      {pageGroupIndex > 0 && (
        <StyledPaginationButton onClick={handlePrevGroup}>
          &lt;
        </StyledPaginationButton>
      )}
      {pages.map((page) => (
        <StyledPaginationButton
          key={page}
          $params={currentPage === page ? String(page) : undefined}
          onClick={() => onPageChange(page)}
        >
          {String(page)}
        </StyledPaginationButton>
      ))}
      {pageGroupIndex < maxPageGroupCount - 1 && (
        <StyledPaginationButton onClick={handleNextGroup}>
          &gt;
        </StyledPaginationButton>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
