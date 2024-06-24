import React from 'react';
import styled from 'styled-components';
import { media } from '@utils/media';

interface gridProps {
  column: string;
  place?: string;
  bgColor?: string;
  children: React.ReactNode;
}

const Grid: React.FC<gridProps> = ({ column, place, children, bgColor }) => {
  return (
    <StyledGrid column={column} place={place} bgColor={bgColor}>
      <StyledSection column={column} place={place}>
        {children}
      </StyledSection>
    </StyledGrid>
  );
};

const StyledGrid = styled.section<gridProps>`
  padding: 100px 0;
  display: grid;
  background-color: ${(props) => props.bgColor || '#fff'};\
  
  ${media('tablet')`
  padding:50px 20px;
  `}
`;

const StyledSection = styled.div<gridProps>`
  margin: 0 auto;
  width: 100%;
  max-width: 924px;
  display: grid;
  grid-template-columns: ${(props) => props.column || '1fr'};
  place-items: ${(props) => props.place || 'start'};

  ${(props) => media('tablet')`
    grid-template-columns: ${props.column !== '1fr' ? '1fr' : '1fr'};
  `}
`;

export default Grid;
