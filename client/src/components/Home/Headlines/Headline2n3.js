import React from "react";
import { Row, Col, CardColumns } from "reactstrap";

//Importiong Components
import HeadlineDetailsComponent from "./HeadlineDetails";

const Headline2n3 = (props) => {
  const { articles } = props;
  let Headline2;
  let Headline3;
  //find Headline2
  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    if (article.isHeadline2 === true) {
      Headline2 = article;
      break;
    } else {
      continue;
    }
  }
  //find Headline3
  for (let i = 0; i < articles.length; i++) {
    let article = articles[i];
    if (article.isHeadline3 === true) {
      Headline3 = article;
      break;
    } else {
      continue;
    }
  }

  return (
    <div>
      {/* <div className="c-crosshatch border mt-5 mb-4 mx-5 pb-1"></div> */}
      <Row>
        <Col className="mt-4" xs="12" md="6">
          <div className="c-headlineBlockBorder"></div>
          <div className="c-headlineBlock mb-2"></div>
          <h2 className="border-bottom mb-3 pb-2">{Headline2.title}</h2>
          <h3 className="mb-3">{Headline2.subtitle}</h3>
          <CardColumns className="c-headlineColumn2n3">
            <p>
              {Headline2.body.split("\n").map(function (paragraph, idx) {
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
          </CardColumns>
          <HeadlineDetailsComponent />
        </Col>
        <div className="c-maxSmFeature c-crosshatch border w-100 mt-5 mb-4 mx-5 pb-1"></div>
        <Col className="mt-4" xs="12" md="6">
          <div className="c-headlineBlockBorder"></div>
          <div className="c-headlineBlock mb-2"></div>
          <h2 className="border-bottom mb-3 pb-2">{Headline3.title}</h2>
          <h3 className="mb-3">{Headline3.subtitle}</h3>
          <CardColumns className="c-headlineColumn2n3">
            <p>
              {Headline3.body.split("\n").map(function (paragraph, idx) {
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
          </CardColumns>
          <HeadlineDetailsComponent />
        </Col>
        <div className="c-maxSmFeature m-5"></div>
      </Row>
    </div>
  );
};

export default Headline2n3;
