import { useState } from "react";
import ReactPaginate from "react-paginate";

import "./pagination.scss";

interface PageChangeData {
  selected: number;
}

export const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const onPageChange = (data: PageChangeData) => {
    setCurrentPage(data.selected);
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={5}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
      />
    </>
  );
};
