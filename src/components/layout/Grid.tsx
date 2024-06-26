import React from 'react';
import styled from 'styled-components';
import { media } from '@utils/media';

interface GridProps {
  bgColor?: string;
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, bgColor }) => {
  return (
    <StyledGrid $bgColor={bgColor}>
      <StyledSection>{children}</StyledSection>
    </StyledGrid>
  );
};

const StyledGrid = styled.section<{ $bgColor?: string }>`
  padding: 100px 0;
  display: grid;
  background-color: ${(props) => props.$bgColor || '#fff'};
  ${media('tablet')`
    padding: 50px 20px;
  `}
`;

const StyledSection = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 924px;
  display: grid;
`;

export default Grid;
