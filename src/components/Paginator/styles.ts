import styled from "styled-components";

export const PaginatorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 8px;
  margin: 0 5px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadowSecondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
    color: ${({ theme }) => theme.colors.text};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.hoverBackground};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
  }
`;