import React from "react";

const HeadlineDetails = (props) => {
  return (
    <p className="text-center mt-4 mb-0">
      <small className="c-borderUnderline c-pointer border-top pt-2">
        Headline author
      </small>
      <small className="text-muted border-top pt-2 px-1">|</small>
      <small className="c-borderUnderline c-pointer border-top pt-2">Section</small>
      <small className="text-muted border-top pt-2 px-1">|</small>
      <small className="text-muted border-top pt-2">Date</small>
    </p>
  );
};

export default HeadlineDetails;
