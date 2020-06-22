import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const LatestNewsPagination = (props) => {
  return (
    <div>
      <Pagination>
        <PaginationItem>
          <PaginationLink className="c-select" first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="c-select" last href="#" />
        </PaginationItem>
      </Pagination>
      <div className="c-crosshatch mt-n3 pb-1"></div>
    </div>
  );
};

export default LatestNewsPagination;
