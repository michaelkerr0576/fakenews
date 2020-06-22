import React from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Moment from "react-moment";

//Importiong Components
import AdminLatestNewsColumnFooter from "./AdminLatestNewsColumnFooter";

const LatestNewsColumnArticle = (props) => {
  const { articles } = props;

  return (
    <div>
      <TransitionGroup className="c-latestNewsColumnArticle">
        {articles.map((article, i) => (
          <CSSTransition key={article.id} timeout={500} classNames="fade">
            <Card>
              <CardHeader>
                <Row>
                  <Col xs="auto" className="text-left mr-auto">
                    <small className="c-borderUnderline c-pointer">
                      {article.author}
                    </small>
                    <small className="text-muted mx-1">|</small>
                    <small className="c-borderUnderline c-pointer">
                      {article.section}
                    </small>
                  </Col>
                  <Col xs="auto" className="text-right">
                    <small className="text-muted font-italic">
                      <Moment fromNow>{article.datetime}</Moment>
                    </small>
                  </Col>
                </Row>
              </CardHeader>
              <div className="c-crosshatch pb-1"></div>
              <CardBody>
                <CardTitle className="my-1">{article.title}</CardTitle>
                <hr className="c-hr2 mx-n2 my-2" />
                <CardColumns className="c-latestNewsColumn mt-3">
                  <CardSubtitle className="pt-1">
                    {article.subtitle}
                  </CardSubtitle>
                  <p>
                    {article.body.split("\n").map(function (paragraph, idx) {
                      return (
                        <span key={idx}>
                          {paragraph}
                          <br />{" "}
                          <br
                            style={{
                              height: "1px",
                              visibility: "hidden",
                              marginBottom: "-1px",
                            }}
                          />
                        </span>
                      );
                    })}
                  </p>
                </CardColumns>
              </CardBody>
              <div className="c-crosshatch pb-1"></div>
              {/* ADMIN - Rendered if user is logged in */}
              <AdminLatestNewsColumnFooter articleIndex={i} article={article} />
            </Card>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default LatestNewsColumnArticle;
