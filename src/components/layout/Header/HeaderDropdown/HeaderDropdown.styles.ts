import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const StyledDropdownButton = styled.button`
  cursor: pointer;
`;

export const StyledIcon = styled.div`
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

export const StyledDropdownContentWrap = styled.div`
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
