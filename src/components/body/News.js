import React from "react";
import Headlines from "../../utilities/Headlines";

const News = ({ totalPages, page, setPage }) => {
  return (
    <>
      <nav>
        <ul className="pagination justify-content-center align-items-center">
          <li className="page-item cursor">
            <span
              className="page-link"
              onClick={() => {
                setPage(1);
              }}
            >
              {"<<"}
            </span>
          </li>
          {Headlines(totalPages, page).map((pageOffset) => {
            return (
              <li
                key={pageOffset}
                className={`page-item cursor ${
                  pageOffset === page ? "active" : ""
                }`}
              >
                <span
                  className="page-link"
                  onClick={() => {
                    setPage(pageOffset);
                  }}
                >
                  {pageOffset}
                </span>
              </li>
            );
          })}
          <li className="page-item cursor">
            <span
              className="page-link"
              onClick={() => {
                setPage(totalPages);
              }}
            >
              {">>"}
            </span>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default News;
