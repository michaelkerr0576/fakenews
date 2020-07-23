import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardColumns,
  CardSubtitle,
  CardBody,
  Collapse,
} from "reactstrap";
import {
  Transition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import Moment from "react-moment";

//Importiong Components
import AdminLatestNewsColumnFooter from "./AdminLatestNewsColumnFooter";

class LatestNewsColumnArticle extends Component {
  state = {
    collapse: false,
  };

  onToggle = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  render() {
    const { article, index } = this.props;
    const { collapse } = this.state;

    let accordianIcon;
    if (collapse === false) {
      accordianIcon = (
        <small className="text-muted">
          <i className="fas fa-chevron-up"></i>
        </small>
      );
    } else {
      accordianIcon = (
        <small className="text-muted">
          <i className="fas fa-chevron-down"></i>
        </small>
      );
    }

    return (
      <div>
        <TransitionGroup className="c-latestNewsColumnArticle">
          <CSSTransition key={article._id} timeout={1000} classNames="fade">
            <Card>
              {/* Card Header */}
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
                {/* Card Title */}
                <CardTitle
                  className="c-textUnderline c-pointer my-1"
                  onClick={this.onToggle}
                >
                  <div className="d-flex align-items-end">
                    <div> {article.title}</div>
                    <div className="ml-auto">{accordianIcon}</div>
                  </div>
                </CardTitle>
                {/* Card Body - accordian with transition*/}
                <Transition in={collapse} timeout={1000}>
                  <Collapse isOpen={collapse}>
                    <hr className="c-hr2 mx-n2 my-2" />
                    <CardColumns className="c-latestNewsColumn mt-3">
                      <CardSubtitle className="pt-1">
                        {article.subtitle}
                      </CardSubtitle>
                      <p>
                        {/* Article Body - creating paragraphs*/}
                        {article.body
                          .split("\n")
                          .map(function (paragraph, idx) {
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
                  </Collapse>
                </Transition>
              </CardBody>
              <div className="c-crosshatch pb-1"></div>
              {/* ADMIN - Rendered if user is logged in */}
              <AdminLatestNewsColumnFooter
                articleIndex={index}
                article={article}
              />
            </Card>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default LatestNewsColumnArticle;
