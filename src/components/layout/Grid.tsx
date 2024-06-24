import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';

interface gridProps {
  column: string;
  place?: string;
  bgColor?: string;
}

const Grid: React.FC<gridProps & { children: React.ReactNode }> = ({
  column,
  place,
  children,
  bgColor,
}) => {
  return (
    <StyledGrid column={column} place={place} bgColor={bgColor}>
      {children}
    </StyledGrid>
  );
};

const StyledGrid = styled.section<gridProps>`
  padding: 100px 400px;
  display: grid;
  grid-template-columns: ${(props) => props.column || '1fr'};
  place-items: ${(props) => props.place || 'start'};
  background-color: ${(props) => props.bgColor || '#fff'};
`;

export default Grid;
