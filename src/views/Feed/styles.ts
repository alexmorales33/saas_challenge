import styled from "styled-components";

export const TopContainer = styled.div`
  padding: 1rem 1rem 0 1rem;
  width: 100%;
  height: 4rem;
  
  @media (min-width: 1024px) {
    width: 100%;
  }
  
  @media (min-width: 1280px) {
    width: 90%;
  }
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  padding: 1rem 1rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;
