"use client";
import React, { useEffect, useState } from "react";

const Pagination = ({ lastPage, currentPage: currPage, onPageChange }) => {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1); // Initialize the current page state to 2 (or any other default active page)

  useEffect(() => {
    setTotalPages(lastPage);
  }, [lastPage]);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);

    setCurrentPage(currPage);
    setTotalPages(lastPage);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const renderPageNumbers = generatePageNumbers().map((page) => (
    <li
      key={page}
      className={`page-item${page === currentPage ? " active" : ""}`}
    >
      <span
        className="page-link pointer"
        href="#"
        onClick={() => handlePageClick(page)}
      >
        {page}
      </span>
    </li>
  ));

  return (
    <div className="mbp_pagination text-center">
      <ul className="page_navigation">
        <li className="page-item">
          <span
            className="page-link pointer"
            href="#"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <span className="fas fa-angle-left" />
          </span>
        </li>
        {renderPageNumbers}
        <li className="page-item pointer">
          <span
            className="page-link"
            href="#"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            <span className="fas fa-angle-right" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
