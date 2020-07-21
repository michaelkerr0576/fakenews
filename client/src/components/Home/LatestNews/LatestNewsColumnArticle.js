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
} from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Moment from "react-moment";

//Importiong Components
import AdminLatestNewsColumnFooter from "./AdminLatestNewsColumnFooter";
import ViewArticleModal from "../Modals/ViewArticleModal";
class LatestNewsColumnArticle extends Component {
  state = {
    modal: false,
  };

  onToggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { article, index } = this.props;
    const { modal } = this.state;

    return (
      <div>
        {/* Conditional rendering of View Article Modal */}
        {modal ? (
          <ViewArticleModal
            modal={modal}
            onToggleParent={this.onToggle}
            article={article}
          />
        ) : (
          false
        )}
        {/* Latest News Article */}
        <TransitionGroup className="c-latestNewsColumnArticle">
          <CSSTransition key={article._id} timeout={500} classNames="fade">
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
                <CardTitle
                  className="c-textUnderline c-pointer my-1"
                  onClick={this.onToggle}
                >
                  {article.title}
                </CardTitle>
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
