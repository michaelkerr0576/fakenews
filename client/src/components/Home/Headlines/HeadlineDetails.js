import React from "react";
import Moment from "react-moment";

const HeadlineDetails = (props) => {
  const { author, section, datetime } = props;

  return (
    <p className="text-center mt-4 mb-0">
      <small className="c-borderUnderline c-pointer border-top pt-2">
        {author}
      </small>
      <small className="text-muted border-top pt-2 px-1">|</small>
      <small className="c-borderUnderline c-pointer border-top pt-2">{section}</small>
      <small className="text-muted border-top pt-2 px-1">|</small>
      <small className="text-muted border-top pt-2"><Moment format="DD/MM/YYYY">{datetime}</Moment></small>
    </p>
  );
};

export default HeadlineDetails;
