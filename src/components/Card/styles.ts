import Image from 'next/image';
import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px ${({ theme }) => theme.colors.shadow}, 0 4px 6px -4px ${({ theme }) => theme.colors.shadow};
  overflow: hidden;
  max-width: 20rem;
`;

export const CardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 22rem;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.gradientStart},
    ${({ theme }) => theme.colors.gradientMiddle},
    ${({ theme }) => theme.colors.gradientEnd}
  );
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const CardMetrics = styled.div`
  position: relative;
  bottom: 1.3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px ${({ theme }) => theme.colors.shadow};
`;

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const CardMetric = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const FooterRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderBottom};
  padding: 0.5rem;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 1.5rem;
  }
`;

export const BoldText = styled.p`
  font-weight: bold;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const IconButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
`;
