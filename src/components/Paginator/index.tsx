import React from "react";
import { PaginatorProps } from "./types";
import { Button, PaginatorContainer } from "./styles";

const Paginator: React.FC<PaginatorProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <PaginatorContainer>
      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </Button>
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </Button>
    </PaginatorContainer>
  );
};

export default Paginator;
