import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
`;

export const DropdownButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '';
    background-image: url('/svgs/arrow-down.svg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 12px;
    height: 12px;
    margin-top: 8px;
    margin-left: 8px;
  }
`;

export const DropdownContent = styled.div<any>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background};
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px ${({ theme }) => theme.colors.shadow};
  z-index: 99;
`;

export const DropdownItem = styled.a`
  color: ${({ theme }) => theme.colors.text};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
  }
`;
