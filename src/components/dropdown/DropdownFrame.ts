import styled from 'styled-components';
import ArrowIcon from '@assets/icons/icon-arrow.svg';
import { media } from '@utils/media';

export const StyledDropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const StyledDropdownButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  height: 49px;
  padding: 10.5px 15px;
  background-color: ${(props) => props.theme.colors.gray[50]};
  border: 1px solid transparent;
  border-radius: 10px;
  font: ${(props) => props.theme.fonts['pretendard/md-14px-regular']};
  color: ${(props) => props.theme.colors.gray[600]};
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ $isOpen: isOpen, theme }) =>
    isOpen &&
    `
    outline: 1px solid ${theme.colors.main[500]};
    `}

  .icon {
    transition: transform 0.3s;
    transform: ${({ $isOpen: isOpen }) =>
      isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    width: 22px;
    height: 22px;
    background-image: url(${ArrowIcon});
    background-size: cover;
  }

  ${media('mobile')`
    width: 100%;
  `}
`;

export const StyledDropdownList = styled.ul`
  position: absolute;
  width: 100%;
  padding: 6px 4px;
  margin-top: 5px;
  border: none;
  background-color: ${(props) => props.theme.colors.gray[50]};
  border-radius: 10px;
  z-index: 1000;

  ${media('mobile')`
    width: 100%;
    padding: 6px 3.35px;
  `}
`;

export const StyledDropdownItem = styled.li`
  width: 392px;
  height: 35px;
  padding-left: 16px;
  padding-top: 5px;
  font: ${(props) => props.theme.fonts['pretendard/md-14px-regular']};
  color: ${(props) => props.theme.colors.gray[800]};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.main[50]};
  }

  ${media('mobile')`
    width: 100%;
  `}
`;
