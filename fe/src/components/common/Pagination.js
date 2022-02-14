import React, { useState } from "react";
import Pagination from "react-js-pagination";
import '../../styles/Pagination.css'

function Paging() {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination 
      activePage={page}
      itemsCountPerPage={2}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;