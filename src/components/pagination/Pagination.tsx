import React, {FC} from "react";
import usePagination from "../../hooks/use-pagination/usePagination";
import {PokemonRecord} from "../../state/interfaces/pokemon";
import {
  PaginationStyled,
  PaginationLeftContainerStyled,
  PaginationRightContainerStyled,
  PaginationMiddleContainerStyled, PaginationImageButtonContainerStyled
} from "./Pagination.styled";
const previousButtonIcon = require('../../assets/images/previous_button_icon.png')
const nextButtonIcon = require('../../assets/images/next_button_icon.png')

interface PaginationProps {
  items: Array<any>
  pageLimit: number

  children(items: Array<any>): React.ReactNode
}

const Pagination: FC<PaginationProps> = ({items, pageLimit, children}) => {
  const {nextPage, previousPage, pageData} = usePagination<PokemonRecord>(items, pageLimit);

  return (
    <PaginationStyled>
      <PaginationLeftContainerStyled>
        <PaginationImageButtonContainerStyled
          src={previousButtonIcon}
          onClick={previousPage}
        />
      </PaginationLeftContainerStyled>
      <PaginationMiddleContainerStyled>
        {children(pageData)}
      </PaginationMiddleContainerStyled>
      <PaginationRightContainerStyled>
        <PaginationImageButtonContainerStyled
          src={nextButtonIcon}
          onClick={nextPage}
        />
      </PaginationRightContainerStyled>
    </PaginationStyled>
  );
};

export default Pagination;
