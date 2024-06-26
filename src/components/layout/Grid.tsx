import React from 'react';
import styled from 'styled-components';
import { media } from '@utils/media';

interface GridProps {
  bgColor?: string;
  align?: 'start' | 'center' | 'end';
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children, bgColor, align }) => {
  return (
    <StyledGrid $bgColor={bgColor}>
      <StyledSection align={align}>{children}</StyledSection>
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

const StyledSection = styled.div<{ align?: 'start' | 'center' | 'end' }>`
  margin: 0 auto;
  width: 100%;
  max-width: 924px;
  display: grid;
  align-items: ${(props) => props.align || 'start'};
`;

export default Grid;
