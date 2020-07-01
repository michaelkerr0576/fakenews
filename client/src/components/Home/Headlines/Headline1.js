import React from "react";
import { CardColumns } from "reactstrap";

//Importiong Components
import HeadlineDetailsComponent from "./HeadlineDetails";

const Headline1 = (props) => {
  const { articles } = props;
  let Headline1;
  //find Headline1
  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    if (article.isHeadline1 === true) {
      Headline1 = article;
      break;
    } else {
      continue;
    }
  }

  return (
    <div className="mt-3">
      <div className="c-headlineBlockBorder"></div>
      <div className="c-headlineBlock mb-2"></div>
      <h2 className="border-bottom mb-3 pb-2">{Headline1.title}</h2>
      <h3 className="mb-3">{Headline1.subtitle}</h3>
      <CardColumns className="c-headlineColumn">
        <p>
          {Headline1.body.split("\n").map(function (paragraph, idx) {
            return (
              <span key={idx}>
                {paragraph}
                <br
                  style={{
                    margin: "2.5em 0",
                    lineHeight: "2.5em",
                  }}
                />
              </span>
            );
          })}
        </p>
        <HeadlineDetailsComponent />
      </CardColumns>
    </div>
  );
};

export default Headline1;
