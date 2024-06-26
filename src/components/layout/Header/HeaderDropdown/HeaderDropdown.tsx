import React, { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

interface DropdownProps {
  isOpen: boolean;
  handleToggleDropdown: () => void;
  children: ReactNode;
  icon: string;
}

const HeaderDropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ isOpen, handleToggleDropdown, children, icon }, ref) => (
    <DropdownContainer ref={ref}>
      <StyledDropdownButton onClick={handleToggleDropdown}>
        <StyledIcon>
          <img src={icon} alt="icon" />
        </StyledIcon>
      </StyledDropdownButton>
      {isOpen && (
        <StyledDropdownContentWrap>{children}</StyledDropdownContentWrap>
      )}
    </DropdownContainer>
  ),
);

const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledDropdownButton = styled.button`
  cursor: pointer;
`;

const StyledIcon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 100%;

  & img {
    display: inline-block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledDropdownContentWrap = styled.div`
  display: block;
  position: absolute;
  right: calc(0% - 1rem);
  top: calc(100% + 0.4rem);
  z-index: 1;
  min-width: 12rem;
  max-width: 34rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
`;

export default HeaderDropdown;
